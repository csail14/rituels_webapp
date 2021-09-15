import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Condition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <p className="title">Conditions Générales D'utilisation</p>
        <p className="condition">
          Les présentes conditions générales régissent l’utilisation de ce site
          www.4bpremium.com. <br />
          Ce site appartient et est géré par Anais Chesnel En utilisant ce site,
          vous indiquez que vous avez lu et compris les conditions d’utilisation
          et que vous acceptez de les respecter en tout temps.
        </p>
        <p className="condition">Type de site : Site de Motivation</p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Propriété intellectuelle</strong>
        </p>
        <p className="condition">
          Tout contenu publié et mis à disposition sur ce site est la propriété
          de Anais Chesnel et de ses créateurs. Cela comprend, mais n’est pas
          limité aux images, textes, logos, documents, fichiers téléchargeables
          et tout ce qui contribue à la composition de ce site.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Compte</strong>
        </p>
        <p className="condition">
          Lorsque vous créez un compte sur notre site, vous acceptez ce qui suit
          :{" "}
          <ol>
            <li>
              {" "}
              que vous êtes seul responsable de votre compte et de la sécurité
              et la confidentialité de votre compte, y compris les mots de passe
              ou les renseignements de nature délicate joints à ce compte, et{" "}
            </li>
            <li>
              que tous les renseignements personnels que vous nous fournissez
              par l’entremise de votre compte sont à jour, exacts et véridiques
              et que vous mettrez à jour vos renseignements personnels s’ils
              changent.
            </li>
          </ol>{" "}
          Nous nous réservons le droit de suspendre ou de résilier votre compte
          si vous utilisez notre site illégalement ou si vous violez les
          conditions d’utilisation acceptable.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Ventes des biens et services</strong>
        </p>
        <p className="condition">
          Ce document régit la vente des services mis à disposition sur notre
          site.
        </p>
        <p className="condition">
          Les services que nous offrons comprennent :{" "}
          <ul>
            <li>
              {" "}
              Conseil : Les services liés à ce document sont les services qui
              sont affichés sur notre site au moment où vous y accédez. Toutes
              les informations, descriptions ou images que nous fournissons sur
              nos services sont décrites et présentées avec la plus grande
              précision possible. Cependant, nous ne sommes pas légalement tenus
              par ces informations, descriptions ou images car nous ne pouvons
              pas garantir l’exactitude de chaque produit ou service que nous
              fournissons. Vous acceptez d’acheter ces services à vos propres
              risques.
            </li>
          </ul>{" "}
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Paiements</strong>
        </p>
        <p className="condition">
          Nous acceptons les modes de paiement suivants sur ce site :{" "}
          <ul>
            <li>
              {" "}
              Carte bancaire : Lorsque vous nous fournissez vos renseignements
              de paiement, vous nous confirmez que vous avez autorisé
              l’utilisation et l’accès à l’instrument de paiement que vous avez
              choisi d’utiliser. En nous fournissant vos détails de paiement,
              vous confirmez que vous nous autorisez à facturer le montant dû à
              cet instrument de paiement. Si nous estimons que votre paiement a
              violé une loi ou l’une de nos conditions d’utilisation, nous nous
              réservons le droit d’annuler votre transaction.
            </li>
          </ul>{" "}
        </p>
        <p className="condition">Services </p>{" "}
        <p className="condition">
          Les services seront facturés en totalité à la commande du service.{" "}
        </p>{" "}
        <p className="condition">Abonnements </p>{" "}
        <p className="condition">
          Tous nos abonnements récurrents seront automatiquement facturés et
          renouvelés jusqu’à ce que nous recevions d’avis que vous souhaitez
          annuler l’abonnement.{" "}
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Limitation de responsabilité</strong>
        </p>{" "}
        <p className="condition">
          Anais Chesnel ou l’un de ses employés sera tenu responsable de tout
          problème découlant de ce site. Néanmoins, Anais Chesnel et ses
          employés ne seront pas tenus responsables de tout problème découlant
          de toute utilisation irrégulière de ce site.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Indemnité</strong>
        </p>{" "}
        <p className="condition">
          En tant qu’utilisateur, vous indemnisez par les présentes Anais
          Chesnel de toute responsabilité, de tout coût, de toute cause
          d’action, de tout dommage ou de toute dépense découlant de votre
          utilisation de ce site ou de votre violation de l’une des dispositions
          énoncées dans le présent document.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Lois applicables</strong>
        </p>{" "}
        <p className="condition">
          Ce document est soumis aux lois applicables en France et vise à se
          conformer à ses règles et règlements nécessaires. Cela inclut la
          réglementation à l’échelle de l’UE énoncée dans le RGPD.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Divisibilité</strong>
        </p>{" "}
        <p className="condition">
          Si, à tout moment, l’une des dispositions énoncées dans le présent
          document est jugée incompatible ou invalide en vertu des lois
          applicables, ces dispositions seront considérées comme nulles et
          seront retirées du présent document. Toutes les autres dispositions ne
          seront pas touchées par les lois et le reste du document sera toujours
          considéré comme valide.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Modifications</strong>
        </p>{" "}
        <p className="condition">
          Ces conditions générales peuvent être modifiées de temps à autre afin
          de maintenir le respect de la loi et de refléter tout changement à la
          façon dont nous gérons notre site et la façon dont nous nous attendons
          à ce que les utilisateurs se comportent sur notre site. Nous
          recommandons à nos utilisateurs de vérifier ces conditions générales
          de temps à autre pour s’assurer qu’ils sont informés de toute mise à
          jour. Au besoin, nous informerons les utilisateurs par courriel des
          changements apportés à ces conditions ou nous afficherons un avis sur
          notre site.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Contact</strong>
        </p>{" "}
        <p className="condition">
          Veuillez communiquer avec nous si vous avez des questions ou des
          préoccupations. Nos coordonnées sont les suivantes : admin@4brn.com
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <i>Date d'entrée en vigueur : le 2 août 2021.</i>
        </p>{" "}
        <p className="title">POLITIQUE DE CONFIDENTIALITÉ</p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Le but de cette politique de confidentialité</strong>
        </p>
        <p className="condition">
          Le but de cette politique de confidentialité est d'informer les
          utilisateurs de notre site des données personnelles que nous
          recueillerons ainsi que les informations suivantes, le cas échéant :
          <ul>
            <li>Les données personnelles que nous recueillerons</li>
            <li>L’utilisation des données recueillies</li>
            <li>Qui a accès aux données recueillies</li>
            <li>Les droits des utilisateurs du site</li>
            <li>La politique de cookies du site</li>
          </ul>
          Cette politique de confidentialité fonctionne parallèlement aux
          conditions générales d’utilisation de notre site.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Lois applicables</strong>
        </p>
        <p className="condition">
          Conformément au Règlement général sur la protection des données
          (RGPD), cette politique de confidentialité est conforme aux règlements
          suivants.
          <br />
          Les données à caractère personnel doivent être :
          <ol>
            <li>
              {" "}
              traitées de manière licite, loyale et transparente au regard de la
              personne concernée (licéité, loyauté, transparence) ;
            </li>
            <li>
              collectées pour des finalités déterminées, explicites et
              légitimes, et ne pas être traitées ultérieurement d'une manière
              incompatible avec ces finalités; le traitement ultérieur à des
              fins archivistiques dans l'intérêt public, à des fins de recherche
              scientifique ou historique ou à des fins statistiques n'est pas
              considéré, conformément à l'article 89, paragraphe 1, comme
              incompatible avec les finalités initiales (limitation des
              finalités) ;
            </li>
            <li>
              adéquates, pertinentes et limitées à ce qui est nécessaire au
              regard des finalités pour lesquelles elles sont traitées
              (minimisation des données) ;
            </li>
            <li>
              exactes et, si nécessaire, tenues à jour; toutes les mesures
              raisonnables doivent être prises pour que les données à caractère
              personnel qui sont inexactes, eu égard aux finalités pour
              lesquelles elles sont traitées, soient effacées ou rectifiées sans
              tarder (exactitude) ;
            </li>
            <li>
              conservées sous une forme permettant l'identification des
              personnes concernées pendant une durée n'excédant pas celle
              nécessaire au regard des finalités pour lesquelles elles sont
              traitées; les données à caractère personnel peuvent être
              conservées pour des durées plus longues dans la mesure où elles
              seront traitées exclusivement à des fins archivistiques dans
              l'intérêt public, à des fins de recherche scientifique ou
              historique ou à des fins statistiques conformément à l'article 89,
              paragraphe 1, pour autant que soient mises en œuvre les mesures
              techniques et organisationnelles appropriées requises par le
              règlement afin de garantir les droits et libertés de la personne
              concernée (limitation de la conservation) ;
            </li>
            <li>
              traitées de façon à garantir une sécurité appropriée des données à
              caractère personnel, y compris la protection contre le traitement
              non autorisé ou illicite et contre la perte, la destruction ou les
              dégâts d'origine accidentelle, à l'aide de mesures techniques ou
              organisationnelles appropriées (intégrité et confidentialité).
            </li>
          </ol>{" "}
          Le traitement n'est licite que si, et dans la mesure où, au moins une
          des conditions suivantes est remplie :
          <ol>
            <li>
              la personne concernée a consenti au traitement de ses données à
              caractère personnel pour une ou plusieurs finalités spécifiques ;
            </li>
            <li>
              le traitement est nécessaire à l'exécution d'un contrat auquel la
              personne concernée est partie ou à l'exécution de mesures
              précontractuelles prises à la demande de celle-ci ;
            </li>
            <li>
              le traitement est nécessaire au respect d'une obligation légale à
              laquelle le responsable du traitement est soumis{" "}
            </li>
            <li>
              . le traitement est nécessaire à la sauvegarde des intérêts vitaux
              de la personne concernée ou d'une autre personne physique ;
            </li>
            <li>
              le traitement est nécessaire à l'exécution d'une mission d'intérêt
              public ou relevant de l'exercice de l'autorité publique dont est
              investi le responsable du traitement ;
            </li>
            <li>
              le traitement est nécessaire aux fins des intérêts légitimes
              poursuivis par le responsable du traitement ou par un tiers, à
              moins que ne prévalent les intérêts ou les libertés et droits
              fondamentaux de la personne concernée qui exigent une protection
              des données à caractère personnel, notamment lorsque la personne
              concernée est un enfant.
            </li>
          </ol>
          Pour les résidents de l’État de Californie, cette politique de
          confidentialité vise à se conformer à la California Consumer Privacy
          Act (CCPA). S’il y a des incohérences entre ce document et la CCPA, la
          législation de l’État s’appliquera. Si nous constatons des
          incohérences, nous modifierons notre politique pour nous conformer à
          la loi pertinente.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Consentement</strong>
        </p>
        <p className="condition">
          Les utilisateurs conviennent qu’en utilisant notre site, ils
          consentent à :
        </p>
        <p className="condition">
          <ul>
            <li>
              {" "}
              les conditions énoncées dans la présente politique de
              confidentialité et
            </li>
            <li>
              la collecte, l’utilisation et la conservation des données
              énumérées dans la présente politique
            </li>
          </ul>{" "}
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Données personnelles que nous collectons</strong>
        </p>
        <p className="condition">
          Données collectées automatiquement <br />
          Nous ne collectons aucune donnée automatiquement sur notre site.
        </p>
        <p className="condition">
          Données recueillies de façon non automatique <br /> Nous pouvons
          également collecter les données suivantes lorsque vous effectuez
          certaines fonctions sur notre site :
        </p>{" "}
        <p className="condition">
          <ul>
            <li>Prénom et nom</li>
            <li>Date de naissance</li>
            <li>Email</li>
          </ul>
        </p>{" "}
        <p className="condition">
          Ces données peuvent être recueillies au moyen des méthodes suivantes :{" "}
          <br /> Remplissage base de données
        </p>{" "}
        <p className="condition">
          Veuillez noter que nous ne collectons que les données qui nous aident
          à atteindre l’objectif énoncé dans cette politique de confidentialité.
          Nous ne recueillerons pas de données supplémentaires sans vous en
          informer au préalable.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Comment nous utilisons les données personnelles</strong>
        </p>{" "}
        <p className="condition">
          Les données personnelles recueillies sur notre site seront utilisées
          uniquement aux fins précisées dans la présente politique ou indiquées
          sur les pages pertinentes de notre site. Nous n’utiliserons pas vos
          données au-delà de ce que nous divulguerons.
        </p>
        <p className="condition">
          Les données que nous recueillons lorsque l’utilisateur exécute
          certaines fonctions peuvent être utilisées aux fins suivantes :
          Création compte utilisateur
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Avec qui nous partageons les données personnelles</strong>
        </p>{" "}
        <p className="condition">
          Employés
          <br />
          Nous pouvons divulguer à tout membre de notre organisation les données
          utilisateur dont il a raisonnablement besoin pour réaliser les
          objectifs énoncés dans la présente politique.
        </p>
        <p className="condition">
          Tierces parties <br />
          Nous pouvons partager les données utilisateur avec les tiers suivants
          : Nous pouvons partager les données utilisateur avec des tiers aux
          fins suivantes :
        </p>
        <p className="condition">
          Les tiers ne seront pas en mesure d’accéder aux données des
          utilisateurs au-delà de ce qui est raisonnablement nécessaire pour
          atteindre l’objectif donné.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Autres divulgations</strong>
        </p>{" "}
        <p className="condition">
          Nous nous engageons à ne pas vendre ou partager vos données avec des
          tiers, sauf dans les cas suivants :
          <ul>
            <li>si la loi l'exige</li>
            <li>si elle est requise pour toute procédure judiciaire</li>
            <li>pour prouver ou protéger nos droits légaux</li>
            <li>
              à des acheteurs ou des acheteurs potentiels de cette société dans
              le cas où nous cherchons à la vendre la société
            </li>
          </ul>
          Si vous suivez des hyperliens de notre site vers un autre site,
          veuillez noter que nous ne sommes pas responsables et n’avons pas de
          contrôle sur leurs politiques et pratiques de confidentialité.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>
            Combien de temps nous stockons les données personnelles
          </strong>
        </p>{" "}
        <p className="condition">
          Nous ne conservons pas les données des utilisateurs au-delà de ce qui
          est nécessaire pour atteindre les fins pour lesquelles elles sont
          recueillies.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <strong>Comment nous protégeons vos données personnelles</strong>
        </p>{" "}
        <p className="condition">
          Toutes les données stockées sont conversées dans une base de données
          sécurisées uniquement accessible par les administrateurs de 4B. Les
          données échangées entre le Back et le Front sont protégées par un
          protocole HTPPS, et des routes sécurisées Alors que nous prenons
          toutes les précautions raisonnables pour nous assurer que nos données
          d’utilisateur sont sécurisées et que les utilisateurs sont protégés,
          il reste toujours du risque de préjudice. L’Internet en sa totalité
          peut être, parfois, peu sûr et donc nous sommes incapables de garantir
          la sécurité des données des utilisateurs au-delà de ce qui est
          raisonnablement pratique.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          Mineurs
        </p>{" "}
        <p className="condition">
          Le RGPD précise que les personnes de moins de 15 ans sont considérées
          comme des mineurs aux fins de la collecte de données. Les mineurs
          doivent avoir le consentement d’un représentant légal pour que leurs
          données soient recueillies, traitées et utilisées.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          Vos droits en tant qu’utilisateur
        </p>{" "}
        <p className="condition">
          En vertu du RGPD, les utilisateurs ont les droits suivants en tant que
          personnes concernées :
          <ul>
            <li>droit d’accès</li>
            <li>droit de rectification</li>
            <li>droit à l’effacemen</li>
            <li>droit de restreindre le traitement</li>
            <li>droit à la portabilité des données</li>
            <li>droit d'objection</li>
          </ul>
          Vous trouverez de plus amples informations sur ces droits au chapitre
          3 (art 12-23) du RGPD.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          Comment modifier, supprimer ou contester les données recueillies
        </p>{" "}
        <p className="condition">
          Si vous souhaitez que vos renseignements soient supprimés ou modifiés
          d’une façon ou d’une autre, veuillez communiquer avec notre agent de
          protection de la vie privée ici :
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          Modifications
        </p>{" "}
        <p className="condition">
          Cette politique de confidentialité peut être modifiée à l’occasion
          afin de maintenir la conformité avec la loi et de tenir compte de tout
          changement à notre processus de collecte de données. Nous recommandons
          à nos utilisateurs de vérifier notre politique de temps à autre pour
          s’assurer qu’ils soient informés de toute mise à jour. Au besoin, nous
          pouvons informer les utilisateurs par courriel des changements
          apportés à cette politique.
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          Contact
        </p>{" "}
        <p className="condition">
          Si vous avez des questions à nous poser, n’hésitez pas à communiquer
          avec nous en utilisant ce qui suit : admin@4brn.com
        </p>
        <p style={{ textDecoration: "underline" }} className="condition">
          <i>Date d'entrée en vigueur : le 2 août 2021.</i>
        </p>{" "}
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Condition);
