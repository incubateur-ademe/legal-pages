<script setup lang="ts">
import { type PrivacyPolicyPropsCookie } from "@incubateur-ademe/legal-pages-markdown";

const props = defineProps<{ cookies?: PrivacyPolicyPropsCookie[] }>();
console.log("cookie table ", props.cookies);
</script>
<template>
  <div className="fr-table fr-table--no-caption" v-if="cookies?.length">
    <table>
      <caption>
        Caption tableau des cookies
      </caption>
      <thead>
        <tr>
          <th scope="col">Catégorie de cookie</th>
          <th scope="col">Nom du cookie</th>
          <th scope="col">Durée de conservation</th>
          <th scope="col">Finalités</th>
          <th scope="col">Éditeur</th>
          <th scope="col">Destination</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cookie, index) in cookies" :key="`${index}-cookie`">
          <td>{{ cookie.category }}</td>
          <td>{{ cookie.name }}</td>
          <td>{{ cookie.expiration }}</td>
          <td>{{ cookie.finalities }}</td>
          <td>{{ cookie.editor }}</td>
          <td>{{ cookie.destination }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Aucun cookie</p>
  </div>
</template>
