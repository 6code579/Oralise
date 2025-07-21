
import Button from "../components/Button";
import { 
  Brain, 
  Target, 
  Mic, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  
} from "lucide-react";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";

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
            <AnimatedText text="Méthode Oralise (exclusif)" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Étape 1 */}
              <AnimatedElement animation="scaleIn" delay={800}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white " />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    1. Diagnostic initial personnalisé
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Test oral + analyse des besoins selon votre objectif (note visée, date, niveau actuel)
                  </p>
                </div>
              </AnimatedElement>
              {/* Étape 2 */}
              <AnimatedElement animation="scaleIn" delay={1000}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    2. Plan de progression ciblé
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Axé sur vos faiblesses (ex : temps de réponse, vocabulaire, structure, stress…)
                  </p>
                </div>
              </AnimatedElement>
              {/* Étape 3 */}
              <AnimatedElement animation="scaleIn" delay={1200}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    3. Simulation orale + feedback détaillé
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Vous passez des oraux blancs notés comme à l'examen, avec conseils pratiques
                  </p>
                </div>
              </AnimatedElement>
              {/* Étape 4 */}
              <AnimatedElement animation="scaleIn" delay={1400}>
                <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center  mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    4. Gestion du temps & stratégies de réussite
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pour ne pas perdre de points "bêtement" : introduction claire, exemples, mots de liaison, conclusion
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* SECTION 4 : Formules disponibles */}
      <AnimatedElement animation="slideUp" delay={800}>
        <section className="py-10 px-5 md:px-20">
          <div className="max-w-6xl mx-auto">
            <AnimatedText text="Formules disponibles" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <div className="overflow-x-auto mt-12">
              <AnimatedElement animation="fadeIn" delay={1000}>
                <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <thead className="bg-main-color text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold">Formule</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold">Durée</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white">Express</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">2 semaines</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">4 séances (1 h) - Derniers réglages, révision finale</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white">Standard</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">1 mois</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">6 à 8 séances - Préparation ciblée, niveau B1–C1</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white">Intensive</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">6 semaines</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">10 à 12 séances - Niveau débutant/intermédiaire, gros enjeu</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white">Coaching oral uniquement</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">4 séances</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Pour les candidats à l'aise à l'écrit mais bloqués à l'oral</td>
                    </tr>
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
            <AnimatedText text="Bénéfices concrets" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <AnimatedElement animation="slideLeft" delay={1200}>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Vous apprenez à répondre comme l'examinateur attend
                    </p>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="slideLeft" delay={1300}>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Vous gagnez en fluidité, clarté et structure à l'oral
                    </p>
                  </div>
                </AnimatedElement>
              </div>
              <div className="space-y-6">
                <AnimatedElement animation="slideLeft" delay={1400}>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Vous entraînez votre voix, rythme et stress
                    </p>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="slideLeft" delay={1500}>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Vous êtes prêt(e) le jour J, pas seulement "entraîné(e)"
                    </p>
                  </div>
                </AnimatedElement>
              </div>
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
              <Button label="Réserver ma séance gratuite" changeColor={true} />
            </AnimatedElement>
          </div>
        </section>
      </AnimatedElement>
    </div>
  );
};

export { Examen };
