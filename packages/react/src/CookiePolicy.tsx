import { type CommonProps } from "./types";

export interface CookiePolicyProps extends CommonProps {
  includeBetaGouv?: boolean;
}

export const CookiePolicy = ({ date = "12/03/2024", includeBetaGouv = false }: CookiePolicyProps) => (
  <>
    <h1>Politique des cookies</h1>
    <p>
      <strong>Mis à jour le {date}</strong>
    </p>
    <p>
      L'ADEME {includeBetaGouv ? "et Beta.gouv" : ""} souhaite{includeBetaGouv ? "nt" : ""} vous informer de manière
      claire et transparente sur l'usage des cookies lorsque vous consultez les sites ademe.fr et de beta.gouv.fr.
    </p>
    <div className="fr-alert fr-alert--info fr-alert--sm">
      <p>
        À tout moment, en cliquant sur le lien “Gestion des cookies” [insérer bouton du Gestionnaire de Consentement],
        vous pouvez modifier vos préférences.
      </p>
    </div>

    <h2>1. Préambule</h2>
    <p>
      Pour permettre aux internautes de bénéficier des services proposés par le site{" "}
      <a href="http://www.ademe.fr/">www.ademe.fr</a> (ci-après le « Site ») tels que sa consultation, l’optimisation de
      son utilisation ou sa personnalisation en fonction de l’internaute, le Site utilise des cookies. Vous pouvez à
      tout moment désactiver les cookies auxquels vous avez consenti, et ce gratuitement, à partir des possibilités de
      désactivation qui vous sont offertes et rappelées ci-avant.
    </p>
    <h2>2. Définitions</h2>
    <p>
      Les cookies sont des informations relatives à la navigation de votre terminal (ordinateur, tablette, smartphone,
      etc.) sur le Site. Ils sont utilisés pour envoyer des informations à votre navigateur et permettre à ce navigateur
      de renvoyer des informations au Site (par exemple un identifiant de session ou le choix d’une langue).
    </p>
    <p>
      Seul l’émetteur d’un cookie peut lire ou modifier les informations qui y sont contenues. Il existe différents
      types de cookies :
    </p>
    <ul>
      <li>des cookies de session qui disparaissent dès que vous quittez le Site ;</li>
      <li>
        des cookies permanents qui demeurent sur votre terminal jusqu’à expiration de leur durée de vie ou jusqu’à ce
        que vous les supprimiez à l’aide des fonctionnalités de votre navigateur.
      </li>
    </ul>
    <p>
      Vous êtes informés que, lors de vos visites sur ce Site, des cookies peuvent être installés sur votre équipement
      terminal.
    </p>
    <h2>3. Finalités des cookies utilisés</h2>
    <p>
      Les cookies sont utilisés sur le Site pour différentes finalités, pour faciliter votre navigation, pour vous
      proposer des contenus personnalisés ou pour réaliser des statistiques de visites.
    </p>
    <p>
      Le Site utilise des cookies de <strong>navigation</strong> indispensables à l’utilisation du Site. Ils ont pour
      finalité exclusive la gestion technique du réseau et de permettre ou faciliter la communication par voie
      électronique (détection des erreurs de connexion, identification des points de connexion…).
    </p>
    <p>
      Le Site utilise des cookies de <strong>préférence</strong>, pour vous proposer une navigation selon votre profil
      (entreprises, collectivités/institutionnel/journaliste) et vous permettre d’accéder plus facilement aux contenus
      du Site. Les cookies de préférence permettent également de stocker des contenus en favoris sur certains de nos
      sites.
    </p>
    <p>
      Le Site utilise également des cookies <strong>d’authentification</strong>, indispensables pour vous permettre
      d’accéder à votre espace personnel depuis différents sites ;
    </p>
    <p>
      Enfin, le Site utilise également des cookies de <strong>performance</strong>, dans le but :
    </p>
    <ul>
      <li>
        d’analyser la fréquentation et l’utilisation qui est faite du Site, afin de :
        <ul>
          <li>
            le faire évoluer dans le sens d’une amélioration de l’expérience de navigation, dans l’objectif final de
            vous proposer un Site toujours plus adapté ;
          </li>
          <li>de réaliser des études statistiques ;</li>
          <li>
            de mémoriser les préférences d'affichage de votre navigateur (langue utilisée, paramètres d'affichage,
            système d’exploitation utilisé, etc.) et d’adapter la présentation du Site lors de vos visites, selon les
            matériels et logiciels de visualisation ou de lecture que comporte votre équipement terminal et qui sont
            utilisés pour la navigation sur le Site ;
          </li>
          <li>de mettre en œuvre des mesures de sécurité ;</li>
        </ul>
      </li>
      <li>d’améliorer la pertinence des annonces publicitaires diffusées sur le Site ;</li>
      <li>de rendre le Site plus convivial et interactif</li>
    </ul>
    <h2>4. Quels cookies sont utilisés sur le Site ?</h2>
    <p>Les cookies utilisés sur le Site sont :</p>
    <ul>
      <li>les cookies du Site ;</li>
      <li>les cookies de tiers limitativement choisis par le Site dans le but d’atteindre des objectifs déterminés.</li>
    </ul>
    <p>
      Le Site peut faire appel à des services offerts par des tiers (rappelés dans le tableau ci-dessus), pour vous
      permettre d’accéder à certaines fonctionnalités du Site, afin que vous puissiez partager des contenus du Site avec
      d'autres personnes ou faire connaître à ces autres personnes vos consultations ou vos opinions concernant un
      contenu du Site.
    </p>
    <p>Tel peut être notamment le cas des boutons de partage (X/Twitter, YouTube).</p>
    <p>
      Ces fonctionnalités s’appuient sur des cookies tiers qui sont directement déposés par les réseaux sociaux et
      autres fournisseurs de services éventuellement concernés.
    </p>
    <p>
      Le réseau social est susceptible de vous identifier grâce à ce bouton, même si vous ne l'avez pas utilisé lors de
      votre consultation de notre Site. Ce type de bouton applicatif peut permettre au réseau social concerné de suivre
      votre navigation sur notre Site, du seul fait que votre compte au réseau social était activé sur votre navigateur
      (session ouverte) durant votre navigation sur notre Site.
    </p>
    <p>
      Nous ne disposons d’aucun contrôle sur le processus employé par les réseaux sociaux pour collecter des
      informations relatives à votre navigation sur notre Site et associées aux données personnelles dont ils disposent.
      Nous vous recommandons de consulter les conditions d’utilisation de vos données sur ces réseaux sociaux pour
      connaitre les finalités d'utilisation, notamment publicitaires, et les informations de navigation qu'ils peuvent
      recueillir grâce à ces boutons applicatifs. Il convient de vous assurer que les conditions d’utilisation de ces
      réseaux sociaux peuvent vous permettre d’encadrer et de restreindre l’utilisation de vos données par ces réseaux
      sociaux, notamment en paramètrant vos comptes d'utilisation auprès de ces derniers.
    </p>
    <h2>5. Partage de l’utilisation de votre terminal avec d’autres personnes</h2>
    <p>
      Si votre terminal est utilisé par plusieurs personnes et lorsqu'un même terminal dispose de plusieurs logiciels de
      navigation, nous ne pouvons pas nous assurer de manière certaine que les services et publicités destinés à votre
      équipement terminal correspondent bien à votre propre utilisation de cet équipement terminal et non à celle d'un
      autre utilisateur du même équipement terminal.
    </p>
    <p>
      Le partage avec d'autres personnes de l'utilisation de votre équipement terminal et la configuration des
      paramètres de votre navigateur à l'égard des cookies, relèvent de votre libre choix et de votre responsabilité.
    </p>
    <h2>6. Consentement</h2>
    <p>
      Si des cookies sont mis en place, lors de votre première visite sur le Site, il vous est proposé d’accepter ou de
      refuser leur utilisation.
    </p>
    <p>
      Si vous ne souhaitez pas que des cookies soient installés ou lus sur votre équipement terminal, un cookie de refus
      sera déposé sur votre équipement, afin que le Site enregistre l’information selon laquelle vous vous êtes opposé à
      l’utilisation de cookies. Si vous supprimez ce cookie de refus, il ne sera plus possible de vous identifier comme
      ayant refusé l’utilisation de cookies.
    </p>
    <p>De même, lorsque vous acceptez le recours aux cookies, un cookie de consentement est installé.</p>
    <p>
      Les cookies de consentement ou de refus doivent rester sur votre équipement terminal. Vous pouvez à tout moment
      modifier vos souhaits directement sur le site, en cliquant sur le lien “Gestion des cookies” [insérer bouton du
      Gestionnaire de Consentement] en bas de page.
    </p>
    <h2>7. Gestion des cookies</h2>
    <h3>7.1 Cookies de mesure d’audience</h3>
    <p>
      Notre site utilise des cookies de mesure d’audience pour suivre le nombre de visites, le nombre de pages vues,
      l’activité des visiteurs sur le site et leur fréquence de retour. Ces données statistiques sont soumises à un
      traitement de la part des gestionnaires de statistiques [outils de mesure d’audience : Matomo, Eulerian, Piano
      Analytics autre…].
    </p>
    <p>
      Voir la liste complètes des cookies [nom de l’outils] [insérer le lien fourni par l’outils de la liste des cookies
      qu’il dépose]
    </p>
    <p>
      Ces cookies de mesure d’audience sont exemptés de recueil de consentement comme le permet la délibération CNIL
      n°2020-091, dans la mesure où ces derniers sont strictement nécessaires au fonctionnement du site et que les
      données sont anonymisés. Vous pouvez néanmoins vous opposer à leur utilisation en cliquant sur le bouton suivant :
      [insérer bouton du Gestionnaire de Consentement]
    </p>
    <h3>7.2 Autres cookies de mesure d’audience</h3>
    <p>
      Notre site utilise également des cookies de mesure d’audience qui dépassent ces finalités, ils permettent
      d'améliorer l'expérience utilisateur de navigation et de suivre nos campagnes d’information. Ces cookies n’étant
      pas strictement nécessaires, ils sont soumis ils sont soumis à votre consentement que vous êtes invité à donner ou
      à refuser lors de votre première visite.
    </p>
    <p>
      Vous pouvez gérer et modifier à tout moment l’utilisation des cookies suivant les possibilités rappelées ci-après
      :
    </p>
    <ul>
      <li>directement sur le Site, sur le lien « Gestion des cookies » en bas de page ;</li>
      <li>à partir de votre logiciel de navigation, ou</li>
      <li>de modules ou de plateformes interprofessionnelles d’opposition.</li>
    </ul>
    <p>
      <strong>
        Attention : l’ADEME et Beta.gouv vous rappellent que la prise en compte de votre refus d’installer un cookie
        repose sur le dépôt d’un cookie de refus. Par conséquent, si vous désactivez l’ensemble des cookies de votre
        terminal ou si vous changez de terminal, nous ne saurons plus en mesure d’identifier que vous avez choisi cette
        option.
      </strong>
    </p>
    <h3>7.3 Module de gestion des cookies</h3>
    <p>
      Un module vous permet de choisir les cookies que vous souhaitez accepter et ceux que vous souhaitez refuser sur le
      Site. À tout moment, en cliquant sur le lien « Gestion des cookies » en bas de page du Site, vous pourrez accéder
      au module et modifier vos préférences.
    </p>
    <h3>7.4 Paramétrages du navigateur</h3>
    <p>
      Si la plupart des navigateurs sont paramétrés par défaut et acceptent l’installation de cookies, vous avez la
      possibilité, si vous le souhaitez, de choisir d’accepter tous les cookies, de les rejeter systématiquement ou
      encore de choisir ceux que vous acceptez selon leur émetteur.
    </p>
    <p>
      Vous pouvez également régulièrement supprimer les cookies de votre terminal via votre navigateur. N’oubliez pas
      cependant de paramétrer l’ensemble des navigateurs de vos différents terminaux (tablettes, smartphones,
      ordinateurs…).
    </p>
    <p>
      Pour la gestion des cookies et de vos choix, la configuration de chaque navigateur est différente. Elle est
      décrite dans le menu d'aide de votre navigateur, qui vous permettra de savoir de quelle manière modifier vos
      souhaits en matière de cookies.
    </p>
    <p>
      Nous attirons toutefois votre attention sur le fait qu’en paramétrant votre navigateur pour refuser les cookies,
      certaines fonctionnalités, pages, espaces du Site ne seront pas accessibles, ce dont nous ne saurions être
      responsables.
    </p>
    <h3>7.5 Plateformes interprofessionnelles d’oppostition</h3>
    <p>
      Plusieurs plateformes de professionnels de la publicité vous offrent également la possibilité de refuser ou
      d’accepter des cookies utilisés par les sociétés qui en sont adhérentes. Ces mécanismes centralisés ne bloquent
      pas l’affichage des publicités mais empêchent seulement l’installation de cookies permettant d’adapter les
      publicités à vos centres d’intérêts.
    </p>
    <p>
      Vous pouvez par exemple vous rendre sur le site{" "}
      <a href="http://www.youronlinechoices.com/">www.youronlinechoices.com</a> afin d’interdire l’installation de ces
      cookies sur votre terminal. Ce site est proposé par les professionnels de la publicité digitale regroupés au sein
      de l’association européenne EDAA (European Digital Advertising Alliance) et géré en France par l’Interactive
      Advertising Bureau France.
    </p>
    <p>
      Vous pourrez ainsi connaître les entreprises inscrites à cette plate-forme et qui vous offrent la possibilité de
      refuser ou d'accepter les cookies utilisés par ces entreprises pour adapter à vos informations de navigation les
      publicités susceptibles d'être affichées sur votre terminal :
      <a href="http://www.youronlinechoices.com/fr/controler-ses-cookies/">
        http://www.youronlinechoices.com/fr/controler-ses-cookies/
      </a>
      .
    </p>
    <p>
      Cette plateforme européenne est partagée par des centaines de professionnels de la publicité sur Internet et
      constitue une interface centralisée vous permettant d'exprimer votre refus ou votre acceptation des cookies
      susceptibles d'être utilisés afin d'adapter à la navigation de votre terminal les publicités susceptibles d'y être
      affichées.
    </p>
    <h2>8. Protection des données personnelles</h2>
    <p>
      Dans le cadre de l’utilisation des cookies telle que décrite dans le présent document, l’ADEME et Beta.gouv
      sera/seront, en tant que responsables du traitement, susceptibles de traiter des données à caractère personnel
      vous concernant.
    </p>
    <p>
      Les cookies tiers sur le Site dépendent de responsables de traitement externes qui sont susceptibles, si vous
      acceptez ces cookies, de traiter des données à caractère personnel vous concernant. L’émission et l’utilisation de
      ces cookies par des tiers sont soumises à leur propre politique de protection de la vie privée. Pour plus
      d’information concernant ces traitements, vous pouvez vous reporter aux politiques de confidentialité de ces
      fournisseurs.
    </p>
    <p>
      Les données collectées sont indispensables pour atteindre les objectifs poursuivis par chaque cookie. Elles sont
      uniquement destinées aux services habilités de l’ADEME, de Beta.gouv, et/ou de l’entreprise émettrice des cookies
      tiers.
    </p>
    <p>
      Les données à caractère personnel collectées via les cookies ne sont jamais conservées plus longtemps que
      nécessaire pour atteindre la finalité du cookie et, en tout état de cause, pas plus de 6 mois. Au-delà de cette
      durée, votre consentement sera de nouveau sollicité par un l’affichage d’un bandeau d’informations.
    </p>
    <p>
      Pour de plus amples informations, notamment sur l’exercice de vos droits, reportez-vous à notre Politique de
      protection des données accessible dans le pied de page du site.
    </p>
    <p>
      En application des dispositions du Règlement général sur la protection des données, les personnes disposent d’un
      droit d’interrogation, d’accès, de rectification d’effacement, d’opposition pour motifs légitimes et de
      portabilité relativement à l’ensemble des données.
    </p>
    <p>
      Les données collectées sont, après le décès de la personne, conservées pendant la durée nécessaire pour l’ADEME et
      Beta.gouv de se conformer à ses/leurs obligations légales et règlementaires. A l’expiration de ce délai, les
      données seront effacées, à moins que la personne ne décide qu’elles soient communiquées à un tiers de son choix,
      conformément aux dispositions de l’article 85 de la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
      fichiers et aux libertés.
    </p>
    <p>
      Les droits peuvent être exercés auprès du délégué à la protection des données, dont les coordonnées sont
      communiquées ci-dessus, par courrier électronique ou par courrier postal, accompagné de toute information
      permettant de justifier de votre identité.
    </p>
    <p>
      En cas de litige, il est possible de saisir la Commission nationale de l'informatique et des libertés, autorité de
      contrôle compétente.
    </p>
  </>
);
