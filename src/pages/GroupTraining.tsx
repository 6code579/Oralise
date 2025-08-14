import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";
import { WhatsAppButton } from "../components/WhatsappBtn";
function GroupTraining() {
    return (
        <div className="  text-gray-800 dark:text-white">
            {/* SECTION 1: HERO */}
                <section className="min-h-[50vh] flex flex-col items-start text-start md:items-center justify-center md:text-center px-5 md:px-20 gap-2 mt-5">
                    <AnimatedText text="Parler, s’exprimer, échanger… ensemble, c’est plus motivant." type="typing" speed={60} className="text-4xl md:text-5xl font-bold mb-4 main-color" />
                    <AnimatedText text="Les formations en groupe Oralise vous plongent dans une expérience collective stimulante, bienveillante et 100 % orientée pratique orale." type="reveal" delay={800} className="text-lg md:text-xl max-w-4xl mb-6" />
                    <AnimatedElement animation="scaleIn" delay={1000}>
                        <Button label="Rejoignez un groupe maintenant" changeColor={true} to="/contact" />
                    </AnimatedElement>
                </section>
            {/* SECTION 2: POURQUOI CHOISIR LA FORMATION EN GROUPE */}
                <section className="py-10 px-5 md:px-20">
                    <AnimatedText text="Pourquoi choisir la formation en groupe ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                    <div className="mt-6 space-y-4">
                        {[
                            'Vous manquez de motivation seul ?',
                            'Vous préférez apprendre avec d’autres, échanger, débattre, jouer des scènes réelles ?',
                            'La formation en groupe Oralise est faite pour vous.'
                        ].map((element, index) => (
                            <AnimatedElement key={index} animation="fadeIn" delay={600 + index * 200}>
                                <p>{element}</p>
                            </AnimatedElement>
                        ))}
                    </div>
                    <ul className="mt-6 space-y-3">
                        {[
                            'Une ambiance chaleureuse et active',
                            ' Des progrès réels grâce aux interactions',
                            'Groupes limités à 8 participants',
                            'Groupes constitués selon le profil de chaque apprenant'
                        ].map((element, index) => (
                            <AnimatedElement key={index} animation="slideLeft" delay={1000 + index * 100}>
                                <TextCheck text={element} color="main-color" />
                            </AnimatedElement>
                        ))}
                    </ul>
                </section>
            {/* SECTION 3: POUR QUI EST-CE FAIT ? */}
                <section className="bg-main-color-opacity dark:bg-gray-800 py-10 px-5 md:px-20  ">
                    <AnimatedText text="Pour qui est-ce fait ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                    <ul className="mt-6 space-y-3 ">
                        {[
                            "Étudiant(e), jeune pro ou adulte qui veut oser parler à l’oral",
                            "Apprenant(e) qui aime l’interaction et la stimulation collective",
                            "Personne ayant besoin de rythme et de structure",
                            "Apprenant(e) qui prépare un test, une expatriation ou un examen"
                        ].map((item, index) => (
                            <AnimatedElement key={index} animation="slideLeft" delay={800 + index * 100}>
                                <TextCheck text={item} color="main-color" />
                            </AnimatedElement>
                        ))}
                    </ul>
                </section>
            {/* SECTION 4: CE QUE VOUS RECEVEZ */}
                <section className="py-10 px-5 md:px-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                    {/* Texte à gauche sur desktop */}
                    <div className="w-full md:w-1/2">
                        <AnimatedText text="Ce que vous recevez" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                        <ul className="mt-6 space-y-4">
                            {[
                                "Groupes de 5 à 8 participants maximum",
                                "1 formateur modérateur qui anime, corrige, relance",
                                "Séances interactives : discussions, débats, jeux de rôle, mini-présentations",
                                "Suivi personnalisé même en groupe (feedback oral individuel)"
                            ].map((item, index) => (
                                <AnimatedElement key={index} animation="slideLeft" delay={1000 + index * 100}>
                                    <TextCheck text={item} color="main-color" />
                                </AnimatedElement>
                            ))}
                        </ul>
                        <AnimatedElement animation="scaleIn" delay={1400}>
                            <WhatsAppButton text="Je prends rendez-vous" textMessage="Bonjour Oralise, je suis intéressé(e) par votre formation de Groupe et je voudrais prendre rendez-vous" className="w-fit mt-4" />                        </AnimatedElement>
                    </div>
                    {/* Image à droite sur desktop */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/images/group/group.jpg"
                            alt="Illustration formation en groupe"
                            className="w-full h-auto object-cover rounded-2xl shadow-2xl scale-90 duration-300 hover:scale-95"
                        />
                    </div>
                </section>
            {/* SECTION 5: CONTENU TYPE D’UNE SÉANCE */}
                <section className="py-10 px-5 md:px-20 bg-white dark:bg-gray-800 shadow-2xl">
                    <AnimatedText text="Contenu type d’une séance" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color md:text-right" />
                    <div className="overflow-x-auto mt-8 md:mt-12">
                        <AnimatedElement animation="fadeIn" delay={1200}>
                            <table className="w-full table-auto border-collapse rounded-lg overflow-hidden shadow-2xl">
                                <thead className=" bg-main-color-opacity  text-gray-800  dark:main-color text-md uppercase">
                                    <tr>
                                        <th className="px-6 py-3 text-right border-b border-gray-300 dark:border-gray-700">Étape</th>
                                        <th className="px-6 py-3 text-right border-b border-gray-300 dark:border-gray-700">Activité</th>
                                    </tr>
                                </thead>
                                <tbody className="main-color  dark:text-gray-200 text-sm">
                                    {[
                                        ['1', 'Échauffement vocal & oral'],
                                        ['2', 'Tour de parole sur un sujet donné'],
                                        ['3', 'Jeu de rôle ou débat'],
                                        ['4', 'Feedback express du formateur'],
                                        ['5', 'Vocabulaire / expressions utiles']
                                    ].map(([step, activity]) => (
                                        <tr key={step} className="hover:bg-gray-50 text-right dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
                                            <td className="px-6 py-3 font-bold text-lg">{step}</td>
                                            <td className="px-6 py-3 text-base font-medium">{activity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </AnimatedElement>
                    </div>
                </section>
      
            {/* SECTION 6: AVANTAGES SPÉCIFIQUES */}
          
                <section className="py-8 md:py-16 px-6 md:px-20">
                    <AnimatedText text="Avantages spécifiques du groupe" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                    <ul className="mt-6 space-y-3 ">
                        {[
                            "Vous parlez à chaque séance",
                            "Vous entendez différents niveaux = vous progressez plus vite",
                            "Vous êtes plus engagé(e) (effet de groupe)",
                            "Vous développez des automatismes oraux"
                        ].map((element, index) => (
                            <AnimatedElement key={index} animation="slideLeft" delay={1400 + index * 100}>
                                <TextCheck text={element} color="main-color" />
                            </AnimatedElement>
                        ))}
                    </ul>
                </section>
           
            {/* SECTION 7: APPEL FINAL */}
       
                <section className="bg-none py-8  md:py-24 px-6 md:px-20 text-center">
                    <AnimatedText text="Et si parler devenait enfin un plaisir ?" type="typing" speed={60} className="main-color text-3xl md:text-4xl font-bold mb-6" />
                    <AnimatedText text="Rejoignez un groupe, trouvez votre voix, et transformez votre oral. Avec Oralise, vous êtes entendu, accompagné et encouragé." type="reveal" delay={1600} className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed" />
                    <AnimatedElement animation="scaleIn" delay={1800}>
                        <Button label="Réservez une séance d’essai gratuite" changeColor={true} to="/contact" />
                    </AnimatedElement>
                </section>
           
        </div>
    );
}

export { GroupTraining }