import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Title } from "../components/Title";
import { TextCheck } from "../components/TextCheck";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoachingModule {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  link:string;
}

const coachingModules: CoachingModule[] = [
  {
    id: 1,
    title: "Prise de parole en public",
    description:"Gérer le trac, captiver un auditoire, structurer une intervention, parler avec confiance… sur scène, en réunion, en vidéo ou devant un jury.",
    image: "/images/image.jpg",
    badge: "Classique",
    link:"/",
  },
  {
    id: 2,
    title: "Gestion du stress",
    description:
      "Apprendre à respirer, se centrer, transformer l’émotion en énergie positive. Techniques pratiques et puissantes pour l’oral, le quotidien, les situations sensibles.",
    image: "/images/training2.jpg",
    badge: "Pratique",
      link:"/",
  },
  {
    id: 3,
    title: "Intelligence émotionnelle",
    description:
      "Comprendre ses émotions, maîtriser ses réactions, développer une parole empathique, assertive et responsable. Idéal pour leaders, éducateurs, formateurs.",
    image: "/images/training1.jpg",
    badge: "Leadership",
      link:"/",
  },
  {
    id: 4,
    title: "Rédaction de discours",
    description:
      "Construire un message clair, mémorable et percutant. Écrire pour convaincre, motiver, mobiliser. Coaching rédactionnel + oral.",
    image: "/images/training3.jpg",
    badge: "Spécialisé",
      link:"/",
  },
  {
    id: 5,
    title: "Coaching de vie",
    description:
      "Reprendre le contrôle, faire des choix, retrouver une clarté intérieure et une direction alignée. Confiance, estime, affirmation personnelle.",
    image: "/images/training4.jpg",
    badge: "Personnel",
      link:"/",
  },
  {
    id: 6,
    title: "Coaching professionnel",
    description:
      "Réussir une prise de poste, mieux communiquer au travail, négocier, s’affirmer, manager. Coaching ciblé pour carrière & leadership.",
    image: "/images/training1.jpg",
    badge: "Carrière",
      link:"/",
  },
  {
    id: 7,
    title: "Master Coaching",
    description:
      "Un accompagnement intensif et complet sur 3 à 6 mois. Mix personnalisé entre expression orale, posture, stratégie de vie et leadership personnel. Pour profils à haut potentiel, en reconversion ou quête de transformation profonde.",
    image: "/images/training4.jpg",
    badge: "Intensif",
      link:"/",
  },
];

interface CarouselProps {
  items: CoachingModule[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState<number>(0);
  const length = items.length;

  const next = () => setCurrent((prev) => (prev + 1) % length);
  const prev = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map(({ id, image, title }) => (
          <div key={id} className="min-w-full h-60 md:h-80 relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-main-color-opacity text-white rounded-full px-3 py-1 font-semibold shadow-lg">
              {title}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Précédent"
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-main-color-opacity hover:bg-main-color text-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="w-6 h-6 " />
      </button>
      <button
        onClick={next}
        aria-label="Suivant"
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-main-color-opacity hover:bg-main-color text-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="w-6 h-6 " />
      </button>
    </div>
  );
};

const CoachingPage: React.FC = () => {
  return (
    <main className="text-gray-900 dark:text-white px-6 md:px-20 py-16 space-y-20">
      {/* SECTION 1 - HERO */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <Title
          title="Exprimez votre plein potentiel. Avec un coach, tout change."
          color={true}
    
        />
        <p className="text-lg md:text-xl">
          Que ce soit pour améliorer votre parole, développer votre confiance ou faire évoluer votre vie personnelle ou
          professionnelle, nos coachs vous accompagnent à chaque étape de votre transformation.
        </p>
        <Button
          label="Prendre rendez-vous pour un appel découverte"
          changeColor={true}
          className="mx-auto py-4 px-8 md:text-lg"
        />
      </section>

      {/* SECTION 2 - Explication */}
      <section className="max-w-3xl mx-auto text-center text-lg md:text-xl space-y-4">
        <p>
          <strong>Et si votre parole reflétait vraiment votre puissance intérieure ?</strong>
        </p>
        <p>
          Nos coachings ne sont pas des cours, mais des expériences de libération, de clarification et de stratégie
          personnelle.
          <br />
          Nous travaillons avec vous le fond et la forme, pour aligner ce que vous pensez, ce que vous ressentez, et ce que
          vous dites.
        </p>
      </section>

      {/* SECTION 3 - Carousel + Cards des modules */}
      <section className="space-y-12 max-w-7xl mx-auto">
        <Title title="Nos modules de coaching" color={true} className="text-center" />

        {/* Carousel images */}
        <Carousel items={coachingModules} />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {coachingModules.map(({ id, title, description, badge }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800/70 rounded-2xl shadow-2xl p-6 flex flex-col justify-between border border-solid   transition-shadow duration-300 "
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold main-color">{title}</h3>
                <span className="inline-block bg-main-color text-white text-xs font-semibold uppercase rounded-full px-3 py-1 select-none">
                  {badge}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>
              <Button label="Je prends un rendez-vous" changeColor={true} className="mt-6 self-start scale-95" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 - Déroulement */}
      <section className="max-w-4xl  space-y-6">
        <Title title="Comment se déroule un coaching Oralise ?" color={true} />
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white space-y-2">
          {[
            "Diagnostic offert (30 min en visio)",
            "Objectif et plan d’action clair",
            "Séances régulières en ligne (45 min à 1h15)",
            "Suivi, exercices, feedback entre chaque séance",
            "Bilan, transformation et projection future",
          ].map((item, i) => (
            <TextCheck key={i} text={item} color="main-color" />
          ))}
        </ul>
      </section>

      {/* SECTION 5 - Call to action final */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <p className="text-xl md:text-2xl font-semibold main-color">
           Et si vous osiez être pleinement vous-même, à travers votre voix ?
        </p>
        <p>Nos coachs sont là pour vous écouter, vous guider, vous révéler.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
          <Button label="Réserver une séance découverte gratuite" changeColor={true} />
          <Button label="Recevoir un devis personnalisé" />
        </div>
      </section>
    </main>
  );
};

export {CoachingPage}
