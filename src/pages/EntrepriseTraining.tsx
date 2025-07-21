import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";

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
      <AnimatedElement animation="fadeIn" delay={200}>
        <section className="flex flex-col items-center gap-8 text-center py-10 px-5 md:px-20 md:mt-8">
          <AnimatedText text="Boostez les compétences orales de vos équipes, durablement." type="typing" speed={60} className="text-3xl md:text-5xl font-bold main-color uppercase" />
          <AnimatedText text="Que ce soit pour pitcher, convaincre ou manager, Oralise accompagne vos collaborateurs à s’exprimer avec impact et fluidité." type="reveal" delay={1000} className="max-w-3xl text-base md:text-lg" />
          <img
            src="/images/entreprise/Hero.jpg"
            alt="Formation en entreprise"
            className="w-full md:w-1/2 h-auto rounded-3xl object-cover shadow-lg scale-90 hover:scale-100 transition duration-300"
          />
          <AnimatedElement animation="scaleIn" delay={1200}>
            <Button
              label="Obtenir un devis personnalisé"
              changeColor={true}
              className="md:py-6 md:px-8 md:text-xl"
            />
          </AnimatedElement>
        </section>
      </AnimatedElement>

      {/* POURQUOI UNE FORMATION ENTREPRISE */}
      <AnimatedElement animation="slideUp" delay={400}>
        <section className="flex flex-col md:flex-row items-center gap-8 py-10 px-5 md:px-20">
          <div className="md:w-1/2">
            <img
              src="/images/entreprise/Pourquoi.jpg"
              alt="Pourquoi une formation entreprise"
              className="w-full rounded-2xl object-cover shadow-lg scale-95 duration-300 hover:scale-90"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <AnimatedText text="Pourquoi former vos collaborateurs à l’oral ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <AnimatedText text="L’expression orale est une compétence-clé en entreprise. Qu’il s’agisse de vendre, de manager ou de présenter, la fluidité orale renforce la performance individuelle… et collective. Avec Oralise, vous proposez une formation utile, engageante, et 100% alignée sur les enjeux de votre organisation." type="reveal" delay={800} className="text-base md:text-lg" />
          </div>
        </section>
      </AnimatedElement>

      {/* CAS D’USAGE */}
      <AnimatedElement animation="slideUp" delay={600}>
        <section className="flex flex-col md:flex-row-reverse items-center gap-8 py-10 px-5 md:px-20">
          <div className="md:w-1/2">
            <img
              src="/images/entreprise/who.jpg"
              alt="Cas d’usage"
              className="w-full rounded-2xl object-cover shadow-lg scale-95 duration-300 hover:scale-90"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <AnimatedText text="À qui s’adresse la formation entreprise ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <ul className="space-y-2 text-base md:text-lg">
              {useCases.map((item, index) => (
                <AnimatedElement key={index} animation="slideLeft" delay={800 + index * 100}>
                  <TextCheck text={item} color="main-color" />
                </AnimatedElement>
              ))}
            </ul>
            <AnimatedElement animation="scaleIn" delay={1200}>
              <Button label="Planifier une session découverte" changeColor={true} className="w-fit mt-4" />
            </AnimatedElement>
          </div>
        </section>
      </AnimatedElement>

      {/* SECTION MODULES À LA CARTE */}
      <AnimatedElement animation="fadeIn" delay={800}>
        <section className="py-10 px-5 md:px-20">
          <AnimatedText text="Modules à la carte" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color text-center mb-8 md:mb-12" />
          <div className="grid mb-8 border border-gray-200 rounded-2xl shadow-2xl dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800  ">
            {[
              {
                title: "Prise de parole en public",
                desc: "Structurer un discours, captiver un auditoire, parler avec confiance devant un groupe (réunion, présentation, conférence…)."
              },
              {
                title: "Rédaction professionnelle",
                desc: "Apprendre à rédiger des rapports, comptes rendus, emails, notes de service clairs, efficaces et professionnels."
              },
              {
                title: "Communication client",
                desc: "Gérer les échanges oraux (en face à face ou au téléphone), présenter une offre, répondre aux objections."
              },
              {
                title: "Pitch & présentation commerciale",
                desc: "Présenter un produit, une idée, une action ou un budget à l’oral."
              },
              {
                title: "Gestion et animation des réunions",
                desc: "Réunions efficaces en français ou en anglais. Animer, participer, et synthétiser une réunion à l’oral."
              },
              {
                title: "Gestion du stress à l’oral",
                desc: "Identifier les blocages, adopter des techniques de respiration, gérer les émotions et parler avec assurance même sous pression."
              },
            ].map((module, index) => (
              <AnimatedElement key={index} animation="scaleIn" delay={1000 + index * 100}>
                <figure
                  className={`flex flex-col items-start  justify-start gap-4 p-8 bg-white border-gray-200 ${index < 4 ? "border-b" : ""
                    } ${index % 2 === 0 ? "md:border-e" : ""} dark:bg-gray-800 dark:border-gray-700`}
                >
                  <blockquote className="max-w-2xl  text-gray-500 dark:text-white">
                    <h3 className="text-lg font-semibold text-gray-900 dark:main-color mb-2">
                      {module.title}
                    </h3>
                    <p className="text-sm">{module.desc}</p>
                  </blockquote>
                </figure>
              </AnimatedElement>
            ))}
          </div>
        </section>
      </AnimatedElement>

      {/* CE QUE VOUS RECEVEZ */}
      <AnimatedElement animation="slideUp" delay={1000}>
        <section className="flex flex-col md:flex-row items-center gap-8 py-10 px-5 md:px-20">
          <div className="md:w-1/2">
            <img
              src="/images/entreprise/what.jpg"
              alt="Pack entreprise"
              className="w-full rounded-2xl object-cover shadow-lg scale-95 duration-300 hover:scale-90"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <AnimatedText text="Ce que votre entreprise reçoit concrètement" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <ul className="space-y-2 text-base md:text-lg">
              {entrepriseBenefits.map((item, index) => (
                <AnimatedElement key={index} animation="slideLeft" delay={1200 + index * 100}>
                  <TextCheck text={item} color="main-color" />
                </AnimatedElement>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedElement>

      {/* AVANTAGES COMPARATIFS */}
      <AnimatedElement animation="fadeIn" delay={1200}>
        <section className="space-y-8 text-center py-10 px-5 md:px-20">
          <AnimatedText text="Pourquoi Oralise est différent" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <AnimatedElement animation="scaleIn" delay={1400}>
              <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70 rounded-2xl shadow-xl hover:scale-95 duration-300">
                <h3 className="text-xl font-semibold mb-3 main-color">Oralise Entreprise</h3>
                <ul className="space-y-2 dark:text-white">
                  {advantagesOralise.map((item, index) => (
                    <AnimatedElement key={index} animation="slideLeft" delay={1500 + index * 100}>
                      <TextCheck text={item} color="main-color" />
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="scaleIn" delay={1600}>
              <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70 rounded-2xl shadow-xl hover:scale-95 duration-300">
                <h3 className="text-xl font-semibold mb-3 main-color">Formations classiques</h3>
                <ul className="space-y-2 dark:text-white">
                  {advantagesOthers.map((item, index) => (
                    <AnimatedElement key={index} animation="slideLeft" delay={1700 + index * 100}>
                      <TextCheck text={item} color="main-color" />
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </AnimatedElement>

      {/* APPEL À L’ACTION */}
      <AnimatedElement animation="fadeIn" delay={1400}>
        <section className="flex flex-col items-center text-center gap-6 py-16 px-4 md:px-20">
          <AnimatedText text="Prêt à renforcer les soft skills de vos équipes ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
          <AnimatedText text="Oralise propose un accompagnement sur-mesure, pensé pour vos enjeux de communication. Faites le choix d’une formation humaine, impactante et orientée résultats." type="reveal" delay={1600} className="max-w-3xl text-base md:text-lg" />
          <AnimatedElement animation="scaleIn" delay={1800}>
            <Button label="Je demande une proposition" changeColor={true} className="md:py-8 md:px-8 md:text-xl" />
          </AnimatedElement>
        </section>
      </AnimatedElement>
    </>
  );
};

export { EntrepriseTraining };
