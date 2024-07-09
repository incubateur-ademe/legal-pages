import axios from 'axios';
import * as yaml from 'js-yaml';
import deepDiff, { Diff } from 'deep-diff';
import * as fs from 'fs';

// GitHub API base URL
const githubApiUrl = 'https://api.github.com/repos/betagouv/beta.gouv.fr/git/trees';

// Function to get the list of files in the `_authors` directory from a specific commit using the Git Tree API
const getAuthorFiles = async (sha: string): Promise<string[]> => {
  const response = await axios.get(`${githubApiUrl}/${sha}?recursive=1`, {
    headers: { 'Accept': 'application/vnd.github.v3+json' }
  });
  return response.data.tree
    .filter((file: any) => file.path.startsWith('content/_authors') && file.type === 'blob')
    .map((file: any) => file.path);
};

const getStartupFiles = async (sha: string): Promise<string[]> => {
  const response = await axios.get(`${githubApiUrl}/${sha}?recursive=1`, {
    headers: { 'Accept': 'application/vnd.github.v3+json' }
  });
  return response.data.tree
    .filter((file: any) => file.path.startsWith('content/_startups') && file.type === 'blob')
    .map((file: any) => file.path);
};

// Function to get the content of a file from a specific commit
const getFileContent = async (sha: string, filePath: string): Promise<string> => {
  const url = `https://raw.githubusercontent.com/betagouv/beta.gouv.fr/${sha}/${filePath}`;
  const response = await axios.get(url);
  return response.data;
};

// Function to extract YAML metadata from a Markdown file
const extractYamlMetadata = (content: string): any => {
  const match = content.match(/---\n([\s\S]*?)\n---/);
  if (match) {
    return yaml.load(match[1]);
  }
  return {};
};

type Changes = {
  _name: string;
  _delete?: string[];
  [key: string]: any;
};

const authorArrayKeys = ["missions", "startups", "previously", "badges", "competences", "teams"];
const startupArrayKeys = ["sponsors", "events", "phases", "techno", "usertypes", "thematiques"];

// Function to compare two versions of a file and generate the JSON
const compareFilesBatch = async (shaOld: string, shaNew: string, files: string[], arrayKeys: string[]) => {
  const differences: Changes[] = [];

  const promises = files.map(async (file) => {
    const oldContent = await getFileContent(shaOld, file).catch(() => null);
    const newContent = await getFileContent(shaNew, file).catch(() => null);

    const oldData = oldContent ? extractYamlMetadata(oldContent) : {};
    const newData = newContent ? extractYamlMetadata(newContent) : {};

    const _name = file.split('/').pop()!.replace('.md', '');

    const fileDiff = deepDiff.diff(oldData, newData);

    if (fileDiff) {
      const changes: Changes = { _name };
      console.log("Changes found:", _name, fileDiff.length);

      let keyFlag: string[] = [];
      // Check if one of array keys is modified
      for (const arrayKey of arrayKeys) {
        const arrayKeyChanged = fileDiff.some(change => change.path && change.path[0] === arrayKey);
        if (arrayKeyChanged) {
          changes[arrayKey] = newData[arrayKey];
          newData[arrayKey] && keyFlag.push(arrayKey);
        }
      }

      fileDiff.forEach(change => {
        if (change.path && keyFlag.includes(change.path[0])) return; // Skip individual array keys changes

        if (change.kind === 'E' || change.kind === 'N') {
          deepDiff.applyChange(changes, newData, change);
        } else if (change.kind === 'D') {
          if (!changes['_delete']) changes['_delete'] = [];
          changes['_delete'].push(change.path!.join('.'));
        }
      });

      differences.push(changes);
      keyFlag = [];
    }
  });

  await Promise.all(promises);
  return differences;
};

// Function to chunk an array into smaller arrays of a specified size
const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

// Main function to execute the comparison and write the result to a JSON file
const generateJson = async (shaOld: string, shaNew: string) => {
  const oldAuthorFiles = await getAuthorFiles(shaOld);
  console.log('Old author files:', oldAuthorFiles.length);
  const newAuthorFiles = await getAuthorFiles(shaNew);
  console.log('New author files:', newAuthorFiles.length);

  const allAuthorFiles = Array.from(new Set([...oldAuthorFiles, ...newAuthorFiles]));
  const authorFileChunks = chunkArray(allAuthorFiles, 100);

  let _authors: Changes[] = [];
  for (const authorChunk of authorFileChunks) {
    const chunkDifferences = await compareFilesBatch(shaOld, shaNew, authorChunk, authorArrayKeys);
    _authors = _authors.concat(chunkDifferences);
  }

  const oldStartupFiles = await getStartupFiles(shaOld);
  console.log('Old startup files:', oldStartupFiles.length);
  const newStartupFiles = await getStartupFiles(shaNew);
  console.log('New startup files:', newStartupFiles.length);

  const allStartupFiles = Array.from(new Set([...oldStartupFiles, ...newStartupFiles]));
  const startupFileChunks = chunkArray(allStartupFiles, 100);
  let _startups: Changes[] = [];
  for (const startupChunk of startupFileChunks) {
    const chunkDifferences = await compareFilesBatch(shaOld, shaNew, startupChunk, startupArrayKeys);
    _startups = _startups.concat(chunkDifferences);
  }

  const result = { _authors, _startups };
  fs.writeFileSync('result.json', JSON.stringify(result, null, 2));
  console.log('JSON generated: result.json');
};

// Example usage
const shaOld = '4e6e1680f71551b592fc156cd554c9cac47119d3';
const shaNew = 'eee485057d6e5db83333f2966d38ddba2f64da92';

generateJson(shaOld, shaNew).catch(console.error);
