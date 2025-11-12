<script setup lang="ts">
import { type LegalNoticePropsThirdParty } from "@incubateur-ademe/legal-pages-markdown";

defineProps<{ thirdParties?: LegalNoticePropsThirdParty[] }>();
</script>
<template>
  <template v-if="thirdParties?.length">
    <p v-for="({ name, url, text }, index) in thirdParties" :key="index">
      {{ text }} <a :href="url" target="_blank" rel="noopener noreferrer">{{ name }}</a>
    </p>
  </template>
  <p v-else>Aucun tiers n'est utilisé sur ce site.</p>
</template>
