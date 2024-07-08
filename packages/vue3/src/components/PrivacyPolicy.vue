<script setup lang="ts">
import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import PrivacyPolicyHtml from "@incubateur-ademe/legal-pages-markdown/html/PrivacyPolicy.html?raw";
import { defineProps, withDefaults } from "vue";

import { RELEASE_DATE } from "../releaseDate";

const props = withDefaults(defineProps<PrivacyPolicyProps>(), {
  date: RELEASE_DATE,
});

const PrivacyPolicyHtmlWithDate = PrivacyPolicyHtml.replace(/{{ date }}/g, props.date);
</script>

<template>
  {{ PrivacyPolicyHtmlWithDate }}
</template>
