<script lang="ts" setup>
import { PrivacyPolicy, type PrivacyPolicyPropsCookie, type PrivacyPolicyPropsThirdParty } from '@incubateur-ademe/legal-pages-vue3/PrivacyPolicy'
import { shallowRef } from 'vue'
import CookieConsentButton from '@/components/CookieConsentButton.vue'

const cookieConsentButton = shallowRef(CookieConsentButton)

function onCookieConsentClick () {
  // eslint-disable-next-line no-console
  console.log('====== CLICK')
}

const cookie: PrivacyPolicyPropsCookie[] = [
  {
    category: 'Mesure d’audience anonymisée',
    name: 'Matomo',
    expiration: '13 mois',
    finalities: 'Mesure d’audience',
    editor: 'Matomo & ADEME',
    destination: 'France',
  },
]

const thirdParties: PrivacyPolicyPropsThirdParty[] = [
  {
    name: 'Vercel',
    country: 'États-Unis',
    hostingCountry: 'France (AWS cdg1)',
    serviceType: 'Hébergement',
    policyUrl: 'https://vercel.com/legal/privacy-policy',
  },
  {
    name: '<Renseigner le nom du service>',
    country: '<Pays d’origine du service>',
    hostingCountry:
              '<Si le service permet de changer la localisation du stockage ou du transit des données, le préciser>',
    serviceType: '<Renseigner le type service (Hébergement, bdd, etc.)>',
    policyUrl: '<Ajouter le lien de la politique de confidentialité du service>',
  },
]
</script>

<template>
  <div class="fr-container fr-my-4w">
    <PrivacyPolicy
      include-beta-gouv
      :cookie-consent-button="cookieConsentButton"
      :cookies="cookie"
      site-name="SITE EXEMPLE"
      :third-parties="thirdParties"
      @child-clicked="onCookieConsentClick"
    />
  </div>
</template>
