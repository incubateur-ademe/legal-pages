<script setup lang="ts">
import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import { type ComponentPublicInstance, shallowRef } from "vue";

import PrivacyPolicy from "../generated/PrivacyPolicy.vue";
import PrivacyPolicyTableCookies from "./PrivacyPolicyTableCookies.vue";

defineProps<PrivacyPolicyProps<object>>();

const refTableCookies = shallowRef(PrivacyPolicyTableCookies as unknown as ComponentPublicInstance);
</script>

<template>
  <PrivacyPolicy v-bind="{ ...$attrs, ...$props, tableCookies: refTableCookies }" />
</template>
