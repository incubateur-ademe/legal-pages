<script setup lang="ts">
import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import { shallowRef } from "vue";

import PrivacyPolicy from "@/generated/PrivacyPolicy.vue";

import { RELEASE_DATE } from "../releaseDate";
import PrivacyPolicyCookieTable from "./PrivacyPolicyCookieTable.vue";
import PrivacyPolicyThirdPartyTable from "./PrivacyPolicyThirdPartyTable.vue";

const props = withDefaults(defineProps<PrivacyPolicyProps<object>>(), {
  date: RELEASE_DATE,
  includeBetaGouv: false,
  thirdParties: [] as never,
  cookies: [] as never,
});

const refTableCookies = props.tableCookies ?? shallowRef(PrivacyPolicyCookieTable);
const refTableThirdParties = props.tableThirdParties ?? shallowRef(PrivacyPolicyThirdPartyTable);
</script>

<template>
  <PrivacyPolicy
    v-bind="{ ...$attrs, ...$props, tableCookies: refTableCookies, tableThirdParties: refTableThirdParties }"
  />
</template>
