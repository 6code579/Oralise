
import Button from "../components/Button";
import { 
  Brain, 
  Target, 
  Mic, 
  Clock, 
  BookOpen, 
  GraduationCap, 

  
} from "lucide-react";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";
import { TextCheck } from "../components/TextCheck";

const Examen = () => {
  return (
    <div className="min-h-screen ">
      {/* SECTION 1 : Hero */}
      <AnimatedElement animation="fadeIn" delay={200}>
        <section className="py-10 px-5 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedText text="Obtenez votre certification avec précision, pas avec stress." type="typing" speed={60} className="main-color font-extrabold text-4xl md:text-6xl leading-tight mb-8" />
            <div className="bg-white dark:bg-gray-800/70 rounded-2xl p-8 md:p-12 shadow-2xl mb-6">
              <AnimatedText text="DELF, DALF, TCF, TOEFL, IELTS, TOEIC…" type="typing" speed={40} delay={800} className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6" />
              <AnimatedText text="Chez Oralise, on ne vous 'entraîne' pas." type="reveal" delay={1200} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4" />
              <AnimatedText text="On vous prépare stratégiquement : maîtrise des consignes, gestion du temps, expression orale percutante et entraînements ciblés." type="reveal" delay={1500} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6" />
              <AnimatedText text="Avec nous, vous passez votre test avec sérénité et assurance." type="fadeIn" delay={1800} className="text-xl md:text-2xl font-semibold main-color flex items-center justify-center gap-2" />
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* SECTION 2 : Examens proposés */}
      <AnimatedElement animation="slideUp" delay={400}>
        <section className="py-10 px-5 md:px-20">
          <div className="max-w-6xl mx-auto">
            <AnimatedText text="Examens proposés" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Français langue étrangère */}
              <AnimatedElement animation="scaleIn" delay={600}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6  main-color" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Français langue étrangère
                    </h3>
                  </div>
                  <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      DELF A1 à B2
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      DALF C1 / C2
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      TCF Canada
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      TEF Canada
                    </li>
                  </ul>
                </div>
              </AnimatedElement>
              {/* Anglais */}
              <AnimatedElement animation="scaleIn" delay={800}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Anglais
                    </h3>
                  </div>
                  <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      TOEFL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      IELTS (académique ou général)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      TOEIC (professionnel)
                    </li>
                  </ul>
                </div>
              </AnimatedElement>
            </div>
            <div className="mt-8 text-center">
              <AnimatedText text="Autres sur demande : examens universitaires, concours oraux, épreuves internes d'entreprise" type="reveal" delay={1000} className="text-lg text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2" />
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* SECTION 3 : Méthode Oralise */}
      <AnimatedElement animation="fadeIn" delay={600}>
  <section className="py-10 px-5 md:px-20 bg-white dark:bg-gray-800/70">
    <div className="max-w-6xl mx-auto">
      <AnimatedText
        text="Méthode Oralise (exclusif)"
        type="typing"
        speed={50}
        className="text-2xl md:text-4xl font-bold main-color"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          {
            title: "1. Diagnostic initial personnalisé",
            icon: <Brain className="w-6 h-6 text-white" />,
            iconBg: "bg-blue-500",
            gradient: "from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600",
            text: "Test oral + analyse des besoins selon votre objectif (note visée, date, niveau actuel)",
          },
          {
            title: "2. Plan de progression ciblé",
            icon: <Target className="w-6 h-6 text-white" />,
            iconBg: "bg-purple-500",
            gradient: "from-purple-50 to-pink-100 dark:from-gray-700 dark:to-gray-600",
            text: "Axé sur vos faiblesses (ex : temps de réponse, vocabulaire, structure, stress…)",
          },
          {
            title: "3. Simulation orale + feedback détaillé",
            icon: <Mic className="w-6 h-6 text-white" />,
            iconBg: "bg-green-500",
            gradient: "from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600",
            text: "Vous passez des oraux blancs notés comme à l'examen, avec conseils pratiques",
          },
          {
            title: "4. Gestion du temps & stratégies de réussite",
            icon: <Clock className="w-6 h-6 text-white" />,
            iconBg: "bg-orange-500",
            gradient: "from-orange-50 to-red-100 dark:from-gray-700 dark:to-gray-600",
            text: "Pour ne pas perdre de points \"bêtement\" : introduction claire, exemples, mots de liaison, conclusion",
          },
        ].map((step, index) => (
          <AnimatedElement key={index} animation="scaleIn" delay={800 + index * 200}>
            <div className={`flex flex-col items-center text-center h-full bg-gradient-to-br ${step.gradient} rounded-2xl p-6 shadow-lg`}>
              <div className={`w-12 h-12 ${step.iconBg} rounded-full flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.text}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
</AnimatedElement>


      {/* SECTION 4 : Formules disponibles */}
      <AnimatedElement animation="slideUp" delay={800}>
  <section className="py-10 px-5 md:px-20">
    <div className="max-w-6xl mx-auto">
      <AnimatedText
        text="Formules disponibles"
        type="typing"
        speed={50}
        className="text-2xl md:text-4xl font-bold main-color"
      />
      <div className="overflow-x-auto mt-12">
        <AnimatedElement animation="fadeIn" delay={1000}>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <thead className="bg-main-color text-white">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">Formule</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Durée</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Séances</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Idéal pour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  title: "Express",
                  duration: "2 semaines",
                  sessions: "4 séances (1 h)",
                  description: "Derniers réglages, révision finale",
                },
                {
                  title: "Standard",
                  duration: "1 mois",
                  sessions: "6 à 8 séances",
                  description: "Préparation ciblée, niveau B1–C1",
                },
                {
                  title: "Intensive",
                  duration: "6 semaines",
                  sessions: "10 à 12 séances",
                  description: "Niveau débutant/intermédiaire, gros enjeu",
                },
                {
                  title: "Coaching oral uniquement",
                  duration: "4 semaines",
                  sessions: "4 séances",
                  description: "Pour les candidats à l'aise à l'écrit mais bloqués à l'oral",
                },
              ].map((formula, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white">
                    {formula.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {formula.duration}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {formula.sessions}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {formula.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedElement>
      </div>
    </div>
  </section>
</AnimatedElement>


      {/* SECTION 5 : Bénéfices concrets */}
      <AnimatedElement animation="fadeIn" delay={1000}>
  <section className="py-10 px-5 md:px-20 bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <AnimatedText
        text="Bénéfices concrets"
        type="typing"
        speed={50}
        className="text-2xl md:text-4xl font-bold main-color"
      />
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {[0, 1].map((colIndex) => (
          <div key={colIndex} className="space-y-6">
            {[
              "Vous apprenez à répondre comme l'examinateur attend",
              "Vous gagnez en fluidité, clarté et structure à l'oral",
              "Vous entraînez votre voix, rythme et stress",
              "Vous êtes prêt(e) le jour J, pas seulement \"entraîné(e)\"",
            ]
              .slice(colIndex * 2, colIndex * 2 + 2)
              .map((text, index) => (
                <AnimatedElement
                  key={index}
                  animation="slideLeft"
                  delay={1200 + colIndex * 200 + index * 100}
                >
                  <div className="flex items-start space-x-4">
                    <TextCheck text={text} color="main-color" />
                    
                  </div>
                </AnimatedElement>
              ))}
          </div>
        ))}
      </div>
    </div>
  </section>
</AnimatedElement>


      {/* SECTION 6 : Appel à l'action */}
      <AnimatedElement animation="fadeIn" delay={1200}>
        <section className="py-10 px-5 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText text="Votre certification est un tremplin. Donnez-vous les moyens de réussir." type="typing" speed={50} className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center main-color gap-3" />
            <div className="space-y-4 mt-8">
              <AnimatedText text="Réservez une séance diagnostic gratuite" type="reveal" delay={1400} className="text-xl text-white/90 flex items-center justify-center gap-2" />
              <AnimatedText text="Commencez votre plan de préparation en 48h" type="reveal" delay={1600} className="text-xl text-white/90 flex items-center justify-center gap-2" />
            </div>
            <AnimatedElement animation="scaleIn" delay={1800}>
              <Button label="Réserver ma séance gratuite" changeColor={true} className="mt-4"/>
            </AnimatedElement>
          </div>
        </section>
      </AnimatedElement>
    </div>
  );
};

export { Examen };
