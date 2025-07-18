import Button from "../components/Button";
import { Title } from "../components/Title";
import { TextCheck } from "../components/TextCheck";

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
        <div className="w-full mt-3 md:max-w-4xl text-start md:text-center flex flex-col gap-4">
          <Title
            title="Avancez 3 fois plus vite avec un coach dédié rien que pour vous."
            color={true} className="uppercase"
          />
          <p className="text-base md:text-xl md:mt-2">
            Vous avez un objectif précis, peu de temps, et besoin de résultats ?<br />
            Avec la formation individuelle Oralise, chaque minute de cours est taillée
            sur mesure pour VOUS faire progresser à l’oral.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-5 items-center">
          <img
            src="/images/individuel/banner.jpg"
            alt="Coaching personnalisé"
            className="w-full rounded-3xl object-cover scale-90 hover:scale-100 transition-transform duration-300 shadow-[0_10px_20px_rgba(38,178,188,0.3),0_6px_6px_rgba(38,178,188,0.2)]"
          />
          <Button
            label="Réserver mon diagnostic gratuit"
            changeColor={true}
            className="w-full md:w-1/2 py-8 md:text-xl "
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img src="/images/individuel/why.jpg" alt="Formation individuelle" className="w-full rounded-2xl object-cover shadow-lg md:scale-90" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <Title title="Pourquoi faire une formation individuelle ?" color={true} />
          <p className="text-base md:text-lg">
            Et si votre blocage à l’oral venait simplement du fait que vous n’avez jamais eu un espace personnalisé pour apprendre ?<br /><br />
            Avec la formation 1:1 Oralise, vous bénéficiez d’un programme unique, conçu autour de votre profil, de vos horaires et de vos ambitions.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img src="/images/individuel/whom.png" alt="Pour qui" className="w-full rounded-2xl object-cover " />
        </div>
        <div className="md:w-1/2 space-y-4 md:space-y-12">
          <Title title="Pour qui est-ce fait ?" color={true} />
          <ul className="list-disc list-inside text-base md:text-lg space-y-1">
            {beneficiaries.map((item, index) => (
              <TextCheck key={index} text={item} color="main-color" />
            ))}
          </ul>
          <Button label="Je prends rendez-vous" changeColor={true} className="w-fit" />
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="flex flex-col md:flex-row items-center gap-10  md:py-16 px-4 md:px-20">
        <div className="md:w-1/2">
          <img src="/images/individuel/receive.jpg" alt="Contenu de la formation" className="w-full rounded-2xl object-cover shadow-lg md:scale-90" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <Title title="Ce que vous recevez concrètement" color={true} />
          <ul className="list-disc list-inside text-base md:text-lg space-y-1">
            {features.map((item, index) => (
              <TextCheck key={index} text={item} color="main-color" />
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-8 md:space-y-12 text-center py-12 md:py-16 px-4 md:px-20">
        <Title title="Les avantages Oralise (vs autres formations)" color={true}/>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70 rounded-2xl shadow-2xl  duration-300 hover:scale-95 ">
            <h3 className="font-semibold text-2xl mb-2 main-color">Oralise 1:1</h3>
            <ul className="list-disc list-inside space-y-1 dark:text-white">
              {advantagesOralise.map((item, index) => (
                <TextCheck key={index} text={item} color="main-color" />
              ))}
            </ul>


          </div>
          <div className="p-6 bg-main-color-opacity dark:bg-gray-800/70   rounded-2xl shadow-2xl   duration-300 hover:scale-95">
            <h3 className="font-semibold text-2xl mb-2 main-color">Formations classiques</h3>
            <ul className="list-disc list-inside space-y-1  dark:text-white">
              {advantagesOthers.map((item, index) => (
                <TextCheck key={index} text={item} color="main-color" />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="flex flex-col items-center gap-6 text-center py-16 px-4 md:px-20">
        <Title title="Prêt(e) à faire un vrai bond en avant ?" color={true} />
        <p className="max-w-3xl text-base md:text-lg">
          Avec la formation individuelle Oralise, vous ne suivez pas un cours :<br />
          vous êtes accompagné, encadré, et valorisé.<br />
          Vous progressez Vraiment !
        </p>
        <Button label="Commencer mon parcours individuel" changeColor={true} className="md:py-8 md:px-8 md:text-xl md:mt-4" />
      </section>
    </>
  );
};

export { IndividuelTraining };
