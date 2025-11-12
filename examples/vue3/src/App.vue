<script setup lang="ts">
import type { DsfrFooterPartnersProps } from '@gouvminint/vue-dsfr'

const { setScheme, theme } = useScheme()!

function changeTheme () {
  setScheme(theme.value === 'light' ? 'dark' : 'light')
}

const title = 'Example App'
const afterMandatoryLinks = [
  {
    label: 'Paramètres d’affichage',
    button: true,
    class: 'fr-icon-theme-fill fr-link--icon-left fr-px-2v',
    to: '/settings',
    onclick: changeTheme,
  },
]

const partners: DsfrFooterPartnersProps = {
  mainPartner: {
    href: 'https://www.ademe.fr/',
    logo: '/img/ademe-logo-2022-1.svg',
    name: 'Agence de la transition écologique',
  },
}
</script>

<template>
  <DsfrHeader
    :service-title="title"
    :logo-text="['République', 'Française']"
    operator-img-alt="Accélérateur de la Transition Écologique"
    operator-img-src="/img/ademe-incubateur-logo.png"
    :operator-img-style="{ width: '3.5rem' }"
  />

  <main class="content">
    <router-view />
  </main>
  <DsfrFooter
    a11y-compliance="non conforme"
    a11y-compliance-link="#"
    :desc-text="`${title} est un service développé par l'accélérateur de la transition écologique de l'ADEME.`"
    operator-img-alt="Accélérateur de la Transition Écologique"
    operator-img-src="/img/ademe-incubateur-logo.png"
    :operator-img-style="{ width: '3.5rem' }"
    :partners="partners"
    home-link="/"
    cookies-link="/politique-des-cookies"
    personal-data-link="/politique-de-confidentialite"
    legal-link="/mentions-legales"
    :after-mandatory-links="afterMandatoryLinks"
  />
</template>

<style lang="scss" scoped>
.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
</style>
