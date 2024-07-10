<script setup lang="ts">
import { type PrivacyPolicyPropsCookie } from "@incubateur-ademe/legal-pages-markdown";
import { type ComponentPublicInstance, shallowRef } from "vue";

import ButtonClick from "./ButtonClick.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";

const refButtonClick = shallowRef(ButtonClick as unknown as ComponentPublicInstance);

function onChildClicked() {
  console.log("Le composant enfant a été cliqué");
}

const cookieOpts: PrivacyPolicyPropsCookie[] = [
  {
    category: "Mesure d’audience anonymisée",
    name: "Matomo",
    expiration: "13 mois",
    finalities: "Mesure d’audience",
    editor: "Matomo & ADEME",
    destination: "France",
  },
];
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <PrivacyPolicy
    date="12/12/12"
    :cookie-consent-button="refButtonClick"
    @child-clicked="onChildClicked"
    :cookies="cookieOpts"
    site-name="TEST"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
