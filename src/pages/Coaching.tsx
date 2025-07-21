import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";
import { WhatsAppButton } from "../components/WhatsappBtn";

interface CoachingModule {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  link: string;
  message: string
}

const coachingModules: CoachingModule[] = [
  {
    id: 1,
    title: "Prise de parole en public",
    description: "Gérer le trac, captiver un auditoire, structurer une intervention, parler avec confiance… sur scène, en réunion, en vidéo ou devant un jury.",
    image: "/images/image.jpg",
    badge: "Classique",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Coaching et je voudrais discuter avec vous pour prendre rendez-vous!"
  },
  {
    id: 2,
    title: "Gestion du stress",
    description:
      "Apprendre à respirer, se centrer, transformer l’émotion en énergie positive. Techniques pratiques et puissantes pour l’oral, le quotidien, les situations sensibles.",
    image: "/images/training2.jpg",
    badge: "Pratique",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Gestion de stress et je voudrais discuter avec vous pour prendre rendez-vous!"
  },
  {
    id: 3,
    title: "Intelligence émotionnelle",
    description:
      "Comprendre ses émotions, maîtriser ses réactions, développer une parole empathique, assertive et responsable. Idéal pour leaders, éducateurs, formateurs.",
    image: "/images/training1.jpg",
    badge: "Leadership",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Intelligence émotionnelle et je voudrais discuter avec vous pour prendre rendez-vous!"
  },
  {
    id: 4,
    title: "Rédaction de discours",
    description:
      "Construire un message clair, mémorable et percutant. Écrire pour convaincre, motiver, mobiliser. Coaching rédactionnel + oral.",
    image: "/images/training3.jpg",
    badge: "Spécialisé",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Rédaction de discours et je voudrais discuter avec vous pour prendre rendez-vous!"
  },
  {
    id: 5,
    title: "Coaching de vie",
    description:
      "Reprendre le contrôle, faire des choix, retrouver une clarté intérieure et une direction alignée. Confiance, estime, affirmation personnelle.",
    image: "/images/training4.jpg",
    badge: "Personnel",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Coaching de vie et je voudrais discuter avec vous pour prendre rendez-vous!"
  },
  {
    id: 6,
    title: "Coaching professionnel",
    description:
      "Réussir une prise de poste, mieux communiquer au travail, négocier, s’affirmer, manager. Coaching ciblé pour carrière & leadership.",
    image: "/images/training1.jpg",
    badge: "Carrière",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Coaching Professionnel et je voudrais discuter avec vous pour prendre rendez-vous!"
  },
  {
    id: 7,
    title: "Master Coaching",
    description:
      "Un accompagnement intensif et complet sur 3 à 6 mois. Mix personnalisé entre expression orale, posture, stratégie de vie et leadership personnel. Pour profils à haut potentiel, en reconversion ou quête de transformation profonde.",
    image: "/images/training4.jpg",
    badge: "Intensif",
    link: "/",
    message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Master Coaching et je voudrais discuter avec vous pour prendre rendez-vous!"
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
    <main className="text-gray-900 dark:text-white px-5 md:px-20 py-10 space-y-20">
      {/* SECTION 1 - HERO */}
      <AnimatedElement animation="fadeIn" delay={200}>
        <section className="text-start md:text-center max-w-4xl mx-auto space-y-6">
          <AnimatedText text="Exprimez votre plein potentiel. Avec un coach, tout change." type="typing" speed={60} className="text-3xl md:text-5xl font-bold main-color" />
          <AnimatedText text="Que ce soit pour améliorer votre parole, développer votre confiance ou faire évoluer votre vie personnelle ou professionnelle, nos coachs vous accompagnent à chaque étape de votre transformation." type="reveal" delay={1000} className="text-lg md:text-xl" />
          <AnimatedElement animation="scaleIn" delay={1200}>
            <WhatsAppButton text="Prendre rendez-vous pour un appel découverte
" className="text-sm" textMessage="Bonjour Oralise, je suis intéressé(e) par votre formation en Coaching et je voudrais discuter avec vous pour prendre rendez-vous!
"/>
          </AnimatedElement>
        </section>
      </AnimatedElement>

      {/* SECTION 2 - Explication */}
      <AnimatedElement animation="slideUp" delay={400}>
        <section className="max-w-3xl mx-auto md:text-center text-lg md:text-xl space-y-4">
          <AnimatedText text="Et si votre parole reflétait vraiment votre puissance intérieure ?" type="reveal" delay={600} className="font-bold main-color" />
          <AnimatedText text="Nos coachings ne sont pas des cours, mais des expériences de libération, de clarification et de stratégie personnelle. Nous travaillons avec vous le fond et la forme, pour aligner ce que vous pensez, ce que vous ressentez, et ce que vous dites." type="reveal" delay={1000} />
        </section>
      </AnimatedElement>

      {/* SECTION 3 - Carousel + Cards des modules */}
      <AnimatedElement animation="fadeIn" delay={600}>
        <section className="space-y-12 max-w-7xl mx-auto">
          <AnimatedText text="Nos modules de coaching" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color text-center" />

          {/* Carousel images */}
          <AnimatedElement animation="slideUp" delay={800}>
            <Carousel items={coachingModules} />
          </AnimatedElement>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coachingModules.map(({ id, title, description, badge, message }) => (
              <AnimatedElement key={id} animation="scaleIn" delay={1000 + id * 100}>
                <div
                  className="bg-white dark:bg-gray-800/70 rounded-2xl shadow-2xl p-6 flex flex-col justify-between border border-solid   transition-shadow duration-300 "
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold main-color">{title}</h3>
                    <span className="inline-block bg-main-color-opacity text-white text-xs font-semibold uppercase rounded-full px-3 py-1 select-none">
                      {badge}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>
                  <WhatsAppButton text="Prendre un rendez-vous" textMessage={message} className="mt-4" />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>
      </AnimatedElement>

      {/* SECTION 4 - Déroulement */}
      <AnimatedElement animation="slideUp" delay={800}>
        <section className="max-w-4xl  space-y-6">
          <AnimatedText text="Comment se déroule un coaching Oralise ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white space-y-2">
            {[
              "Diagnostic offert (30 min en visio)",
              "Objectif et plan d’action clair",
              "Séances régulières en ligne (45 min à 1h15)",
              "Suivi, exercices, feedback entre chaque séance",
              "Bilan, transformation et projection future",
            ].map((item, i) => (
              <AnimatedElement key={i} animation="slideLeft" delay={1000 + i * 100}>
                <TextCheck text={item} color="main-color" />
              </AnimatedElement>
            ))}
          </ul>
        </section>
      </AnimatedElement>

      {/* SECTION 5 - Call to action final */}
      <AnimatedElement animation="fadeIn" delay={1000}>
        <section className="text-start md:text-center max-w-4xl mx-auto space-y-6">
          <AnimatedText text="Et si vous osiez être pleinement vous-même, à travers votre voix ?" type="typing" speed={50} className="text-xl md:text-2xl font-semibold main-color" />
          <AnimatedText text="Nos coachs sont là pour vous écouter, vous guider, vous révéler." type="reveal" delay={1200} />
          <div className="flex flex-col sm:flex-row justify-center items-start gap-6 mt-4">
            <AnimatedElement animation="scaleIn" delay={1400}>
              <WhatsAppButton text=" Réserver une séance gratuite" textMessage="Bonjour Oralise, je voudrais réserver une séance découverte" />

            </AnimatedElement>
            <AnimatedElement animation="scaleIn" delay={1600}>
              <WhatsAppButton text=" Récevoir un dévis personnalisé" textMessage="Bonjour Oralise, je voudrais Récevoir un dévis personnalisé" className="bg-secondary-color shadow-none" /> 
              </AnimatedElement>
          </div>
        </section>
      </AnimatedElement>
    </main>
  );
};

export { CoachingPage }
