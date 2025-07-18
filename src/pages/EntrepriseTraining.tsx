import Button from "../components/Button";
import { Title } from "../components/Title";
import { TextCheck } from "../components/TextCheck";

const EntrepriseTraining = () => {
  const useCases = [
    "Former des équipes commerciales à convaincre à l’oral",
    "Aider les managers à prendre la parole avec clarté",
    "Préparer des collaborateurs à des présentations ou négociations",
    "Renforcer l’impact des communications internes et externes",
    "Accompagner les équipes internationales en français ou en anglais",
  ];

  const entrepriseBenefits = [
    "Audit gratuit des besoins de vos équipes",
    "Contenu ciblé selon vos objectifs métiers",
    "Sessions en visio ou présentiel, flexibles et efficaces",
    "Suivi RH clair : reporting, progression, assiduité",
    "Coachs spécialisés dans les enjeux professionnels",
  ];

  const advantagesOralise = [
    "Contenu sur-mesure par équipe ou collaborateur",
    "Coachs avec une vraie expérience en entreprise",
    "Flexibilité totale : créneaux adaptés à votre activité",
    "Suivi RH & reporting automatisé",
  ];

  const advantagesOthers = [
    "Programmes génériques, sans lien avec vos objectifs",
    "Formateurs généralistes, peu orientés business",
    "Peu de flexibilité ou contraintes logistiques fortes",
    "Pas de visibilité sur les résultats ou le suivi",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center gap-8 text-center py-16 px-4 md:px-20">
        <Title
          title="Boostez les compétences orales de vos équipes, durablement."
          color={true}
          className="uppercase"
        />
        <p className="max-w-3xl text-base md:text-lg">
          Que ce soit pour pitcher, convaincre ou manager, Oralise accompagne vos collaborateurs à s’exprimer avec impact et fluidité.  
        </p>
        <img
          src="/images/entreprise/banner.jpg"
          alt="Formation en entreprise"
          className="w-full md:w-3/4 rounded-3xl object-cover shadow-lg scale-95 hover:scale-100 transition duration-300"
        />
        <Button
          label="Obtenir un devis personnalisé"
          changeColor={true}
          className="md:py-6 md:px-8 md:text-xl"
        />
      </section>

      {/* POURQUOI UNE FORMATION ENTREPRISE */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img
            src="/images/entreprise/why.jpg"
            alt="Pourquoi une formation entreprise"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <Title title="Pourquoi former vos collaborateurs à l’oral ?" color={true} />
          <p className="text-base md:text-lg">
            L’expression orale est une compétence-clé en entreprise. Qu’il s’agisse de vendre, de manager ou de présenter, la fluidité orale renforce la performance individuelle… et collective.
            <br /><br />
            Avec Oralise, vous proposez une formation utile, engageante, et 100% alignée sur les enjeux de votre organisation.
          </p>
        </div>
      </section>

      {/* CAS D’USAGE */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img
            src="/images/entreprise/use-cases.jpg"
            alt="Cas d’usage"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <Title title="À qui s’adresse la formation entreprise ?" color={true} />
          <ul className="space-y-2 text-base md:text-lg">
            {useCases.map((item, index) => (
              <TextCheck key={index} text={item} color="main-color" />
            ))}
          </ul>
          <Button label="Planifier une session découverte" changeColor={true} className="w-fit mt-4" />
        </div>
      </section>

      {/* CE QUE VOUS RECEVEZ */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img
            src="/images/entreprise/receive.jpg"
            alt="Pack entreprise"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <Title title="Ce que votre entreprise reçoit concrètement" color={true} />
          <ul className="space-y-2 text-base md:text-lg">
            {entrepriseBenefits.map((item, index) => (
              <TextCheck key={index} text={item} color="main-color" />
            ))}
          </ul>
        </div>
      </section>

      {/* AVANTAGES COMPARATIFS */}
      <section className="space-y-8 text-center py-16 px-4 md:px-20">
        <Title title="Pourquoi Oralise est différent" color={true} />
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70 rounded-2xl shadow-xl hover:scale-95 duration-300">
            <h3 className="text-xl font-semibold mb-3 main-color">Oralise Entreprise</h3>
            <ul className="space-y-2 dark:text-white">
              {advantagesOralise.map((item, index) => (
                <TextCheck key={index} text={item} color="main-color" />
              ))}
            </ul>
          </div>
          <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70 rounded-2xl shadow-xl hover:scale-95 duration-300">
            <h3 className="text-xl font-semibold mb-3 main-color">Formations classiques</h3>
            <ul className="space-y-2 dark:text-white">
              {advantagesOthers.map((item, index) => (
                <TextCheck key={index} text={item} color="main-color" />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPEL À L’ACTION */}
      <section className="flex flex-col items-center text-center gap-6 py-16 px-4 md:px-20">
        <Title title="Prêt à renforcer les soft skills de vos équipes ?" color={true} />
        <p className="max-w-3xl text-base md:text-lg">
          Oralise propose un accompagnement sur-mesure, pensé pour vos enjeux de communication.
          Faites le choix d’une formation humaine, impactante et orientée résultats.
        </p>
        <Button label="Je demande une proposition" changeColor={true} className="md:py-8 md:px-8 md:text-xl" />
      </section>
    </>
  );
};

export { EntrepriseTraining };
