<script setup lang="ts">
import { type CookiesPolicyProps } from "@incubateur-ademe/legal-pages-markdown";

import CookiesPolicy from "@/generated/CookiesPolicy.vue";
import CookiesPolicyWithBeta from "@/generated/CookiesPolicy_withBeta.vue";

import { RELEASE_DATE } from "../releaseDate";

withDefaults(defineProps<CookiesPolicyProps<object>>(), {
  includeBetaGouv: false,
  date: RELEASE_DATE,
});
</script>

<template>
  <CookiesPolicyWithBeta v-if="includeBetaGouv" v-bind="{ ...$attrs, ...$props }" />
  <CookiesPolicy v-else v-bind="{ ...$attrs, ...$props }" />
</template>
