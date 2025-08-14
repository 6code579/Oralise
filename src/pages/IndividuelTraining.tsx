import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";
import { WhatsAppButton } from "../components/WhatsappBtn";

const IndividuelTraining = () => {
  const beneficiaries = [
    "Un(e) professionnel(le) qui veut parler avec impact en réunion ou en entretien",
    "Un étudiant qui prépare un examen ou un concours en langue",
    "Un(e) expatrié(e) ou futur voyageur qui veut s’exprimer librement",
    "Une personne qui manque de confiance à l’oral, mais veut progresser à son rythme",
  ];

  const features = [
    "1 formateur attitré, sélectionné selon vos objectifs",
    "Des séances en visioconférence flexibles (30, 45, 60 ou 90 minutes)",
    "Un plan de progression personnalisé",
    "Un tableau de suivi avec vos objectifs, réussites et axes à renforcer",
    "L’accès à votre espace privé Oralise (heures restantes, planning, retours formateur)",
  ];

  const advantagesOralise = [
    "Coach dédié, approche humaine",
    "Flexibilité totale des horaires",
    "Suivi personnalisé + feedback réel",
    "Résultats visibles dès 2-3 séances",
  ];

  const advantagesOthers = [
    "Cours de groupe impersonnels",
    "Horaires imposés, rigides",
    "Résultats lents, aléatoires",
  ];

  return (
    <>
      {/* Section Hero */}

        <div className="flex flex-col items-center justify-center gap-12 text-center mt-4 md:py-20 px-4 md:px-0">
          <div className="w-full mt-3 md:max-w-5xl text-start md:text-center flex flex-col gap-4">
            <AnimatedText text="Avancez 3 fois plus vite avec un coach dédié rien que pour vous." type="typing" speed={60} className="text-3xl md:text-5xl font-bold main-color uppercase" />
            <AnimatedText text="Vous avez un objectif précis, peu de temps, et besoin de résultats ? Avec la formation individuelle Oralise, chaque minute de cours est taillée sur mesure pour VOUS faire progresser à l’oral." type="reveal" delay={800} className="text-base md:text-xl md:mt-2" />
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-5 items-center">
            <img
              src="/images/individuel/banner.webp"
              alt="Coaching personnalisé"
              className="w-full md:w-3/4 h-auto rounded-3xl object-cover shadow-lg scale-90 hover:scale-100 transition duration-300"
            />
            <AnimatedElement animation="scaleIn" delay={1000}>
              <Button
                label="Réserver mon diagnostic gratuit"
                changeColor={true}
                className="text-xs md:py-7  md:text-md px-6 " to="/contact"
              />
            </AnimatedElement>
          </div>
        </div>

      {/* SECTION 2 */}

        <section className="flex flex-col md:flex-row items-center gap-8 py-10 px-5 md:px-20">
          <div className="md:w-1/2">
            <img src="/images/individuel/why.webp" alt="Formation individuelle" className="w-full rounded-2xl object-cover shadow-lg md:scale-90" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <AnimatedText text="Pourquoi faire une formation individuelle ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <AnimatedText text="Et si votre blocage à l’oral venait simplement du fait que vous n’avez jamais eu un espace personnalisé pour apprendre ? Avec la formation 1:1 Oralise, vous bénéficiez d’un programme unique, conçu autour de votre profil, de vos horaires et de vos ambitions." type="reveal" delay={800} className="text-base md:text-lg" />
          </div>
        </section>

      {/* SECTION 3 */}
    
        <section className="flex flex-col md:flex-row-reverse items-center gap-8 py-10 px-5 md:px-20">
          <div className="md:w-1/2">
            <img src="/images/individuel/whom.webp" alt="Pour qui" className="w-full rounded-2xl object-cover " />
          </div>
          <div className="md:w-1/2 space-y-4 md:space-y-12">
            <AnimatedText text="Pour qui est-ce fait ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <ul className="list-disc list-inside text-base md:text-lg space-y-1">
              {beneficiaries.map((item, index) => (
                <AnimatedElement key={index} animation="slideLeft" delay={800 + index * 100}>
                  <TextCheck text={item} color="main-color" />
                </AnimatedElement>
              ))}
            </ul>
            <AnimatedElement animation="scaleIn" delay={1200}>
              <WhatsAppButton text="Je prends rendez-vous" textMessage="Bonjour Oralise, je suis intéressé(e) par votre formation individuelle et je voudrais prendre rendez-vous" className="w-fit"/>
            </AnimatedElement>
          </div>
        </section>
     
      {/* SECTION 4 */}

        <section className="flex flex-col md:flex-row items-center gap-8  md:py-10 px-5 md:px-20">
          <div className="md:w-1/2">
            <img src="/images/individuel/receive.webp" alt="Contenu de la formation" className="w-full rounded-2xl object-cover shadow-lg md:scale-90" />
          </div>
          <div className="md:w-1/2 space-y-5">
            <AnimatedText text="Ce que vous recevez concrètement" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <ul className="list-disc list-inside text-base md:text-lg space-y-1">
              {features.map((item, index) => (
                <AnimatedElement key={index} animation="slideLeft" delay={1000 + index * 100}>
                  <TextCheck text={item} color="main-color" />
                </AnimatedElement>
              ))}
            </ul>
          </div>
        </section>
     
      {/* SECTION 5 */}
        <section className="space-y-8 md:space-y-12 text-center py-10 px-5 md:px-20">
          <AnimatedText text="Les avantages Oralise (vs autres formations)" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <AnimatedElement animation="scaleIn" delay={400}>
              <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70 rounded-2xl shadow-2xl  duration-300 hover:scale-95 ">
                <h3 className="font-semibold text-2xl mb-2 main-color">Oralise 1:1</h3>
                <ul className="list-disc list-inside space-y-1 dark:text-white">
                  {advantagesOralise.map((item, index) => (
                    <AnimatedElement key={index} animation="slideLeft" delay={1300 + index * 100}>
                      <TextCheck text={item} color="main-color" />
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="scaleIn" delay={400}>
              <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70   rounded-2xl shadow-2xl   duration-300 hover:scale-95">
                <h3 className="font-semibold text-2xl mb-2 main-color">Formations classiques</h3>
                <ul className="list-disc list-inside space-y-1  dark:text-white">
                  {advantagesOthers.map((item, index) => (
                    <AnimatedElement key={index} animation="slideLeft" delay={1500 + index * 100}>
                      <TextCheck text={item} color="main-color" />
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </section>
     
      {/* SECTION 6 */}
        <section className="flex flex-col items-center gap-6 text-center py-10 px-5 md:px-20">
          <AnimatedText text="Prêt(e) à faire un vrai bond en avant ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
          <AnimatedText text="Avec la formation individuelle Oralise, vous ne suivez pas un cours : vous êtes accompagné, encadré, et valorisé. Vous progressez Vraiment !" type="reveal" delay={1400} className="max-w-3xl text-base md:text-lg" />
          <AnimatedElement animation="scaleIn" delay={1600}>
           <WhatsAppButton text="Commencer mon parcours individuel" textMessage="Bonjour Oralise, je suis intéressé(e) par votre formation individuelle et je voudrais débuter avec." className="w-fit"/>
          </AnimatedElement>
        </section>
    </>
  );
};

export { IndividuelTraining };
