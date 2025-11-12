<script setup lang="ts">
import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";
import { shallowRef } from "vue";

import LegalNotice from "@/generated/LegalNotice.vue";
import LegalNoticeWithBeta from "@/generated/LegalNotice_withBeta.vue";

import { RELEASE_DATE } from "../releaseDate";
import LegalNoticeThirdPartyText from "./LegalNoticeThirdPartyText.vue";

const props = withDefaults(defineProps<LegalNoticeProps<object>>(), {
  date: RELEASE_DATE,
  includeBetaGouv: false,
  thirdParties: [] as never,
  privacyPolicyUrl: "/politique-de-confidentialite",
});

const refThirdParties = props.elementThirdParties ?? shallowRef(LegalNoticeThirdPartyText);
</script>

<template>
  <LegalNoticeWithBeta v-if="includeBetaGouv" v-bind="{ ...$attrs, ...$props, elementThirdParties: refThirdParties }" />
  <LegalNotice v-else v-bind="{ ...$attrs, ...$props, elementThirdParties: refThirdParties }" />
</template>
