<script setup lang="ts">
import { LegalNotice, type LegalNoticePropsSiteHost } from '@incubateur-ademe/legal-pages-vue3/LegalNotice'

const siteHost: LegalNoticePropsSiteHost = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Ave #4133<br/>Covina, CA 91723',
  country: 'États-Unis',
  email: 'privacy@vercel.com',
}

const origin = window.location.origin
</script>

<template>
  <div class="fr-container fr-my-4w">
    <LegalNotice
      include-beta-gouv
      site-name="SITE EXEMPLE"
      :site-url="origin"
      licence-url="https://gitub.com/example/example/blob/main/LICENSE.md"
      privacy-policy-url="/politique-de-confidentialite"
      :site-host="siteHost"
      contact-email="text@exemple.fr"
    />
  </div>
</template>
