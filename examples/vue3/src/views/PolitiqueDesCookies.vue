<script setup lang="ts">
import { CookiesPolicy, type CookiesPolicyPropsAnalyticTool } from '@incubateur-ademe/legal-pages-vue3/CookiesPolicy'
import CookieConsentButton from '@/components/CookieConsentButton.vue'

const cookieConsentButton = shallowRef(CookieConsentButton)

function onCookieConsentClick () {
  // eslint-disable-next-line no-console
  console.log('====== CLICK')
}

const analyticTool: CookiesPolicyPropsAnalyticTool = {
  name: 'Matomo',
  cookieListUrl: 'https://matomo.org/faq/general/faq_146/',
  policyUrl: 'https://matomo.org/privacy-policy/',
}
</script>

<template>
  <div class="fr-container fr-my-4w">
    <CookiesPolicy
      site-name="SITE EXEMPLE"
      :cookie-consent-button="cookieConsentButton"
      :analytic-tool="analyticTool"
      @child-clicked="onCookieConsentClick"
    />
  </div>
</template>
