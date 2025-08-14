import { Banner } from "../components/Banner";
import { TextCheck } from "../components/TextCheck";
import { Users, Smile, BookOpenCheck, Speech } from "lucide-react";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";
import { WhatsAppButton } from "../components/WhatsappBtn";

const ChildrenTraining = () => {
    const trainingBenefits = [
        "Leur vocabulaire",
        "Leur capacité à parler en public",
        "Leur confiance en eux",
        "Leur écoute et leur interaction",
    ];

    const observedResults = [
        "Plus grande aisance à l’oral",
        "Meilleure prononciation et structuration des phrases",
        "Confiance en soi renforcée même à l’école",
        "Ouverture culturelle et curiosité naturelle",
        "Joie d’apprendre",
    ];

    const points = [
        { text: "Pédagogie douce, active et valorisante", icon: Speech },
        { text: "Multilingue (Français, Anglais, Italien)", icon: Users },
        { text: "100 % en ligne, sans déplacement", icon: Smile },
        { text: "Communication avec les parents", icon: BookOpenCheck },
        { text: "Suivi pédagogique sur l’année", icon: Speech },
    ];
    return (
        <>
            {/* HERO SECTION */}
            <AnimatedElement animation="fadeIn" delay={100}>
                <Banner
                    title="Oralise Bourgeons : l’oral épanoui dès l’enfance."
                    description="Développer la parole, la confiance et l’expression des enfants dès le plus jeune âge. Des séances ludiques, vivantes et bienveillantes pour faire germer leur voix."
                    btnText="Réserver une séance d’essai gratuite"
                    image="/images/children/banner.webp"link="/contact"
                />
            </AnimatedElement>

            {/* SECTION 2 - Pourquoi une formation orale pour enfants */}
            <AnimatedElement animation="slideUp" delay={200}>
                <section className="py-10 px-5 md:px-20 md:mt-8 flex flex-col items-start ">
                    <AnimatedText text="Parler bien, ça commence tôt." type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                    <div className="max-w-4xl text-left mt-6 text-lg ">
                        <AnimatedText text="À l’heure des écrans et du stress scolaire, savoir s’exprimer clairement, raconter, argumenter ou lire à voix haute devient un véritable super-pouvoir pour les enfants." type="reveal" delay={800} className="mb-4" />
                        <div className="mt-6">
                            <AnimatedElement animation="scaleIn" delay={1000}>
                                <TextCheck table={trainingBenefits} color="main-color" />
                            </AnimatedElement>
                        </div>
                    </div>
                </section>
            </AnimatedElement>

            {/* SECTION 3 - Pour qui ? */}
            <AnimatedElement animation="fadeIn" delay={300}>
                <section className="py-10 px-5 md:px-20 flex flex-col justify-center items-start">
                    <AnimatedText text="Pour qui ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                    <div className="grid gap-6 md:grid-cols-2 mt-6 items-center ">
                        <div>
                            <AnimatedText text="Enfants de 6 à 12 ans et des Ados de 13 à 17 ans, débutants ou déjà sensibilisés à une langue. Adapté aux enfants francophones comme à ceux qui veulent apprendre une langue étrangère (Français, Anglais)." type="reveal" delay={800} />
                        </div>
                        <div className="space-y-4">
                            <AnimatedElement animation="slideLeft" delay={300}>
                                <div className="flex items-center gap-2">
                                    <Smile className="main-color w-8 h-8 mt-1" />
                                    <p>Des formateurs formés à la pédagogie enfantine</p>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement animation="slideLeft" delay={400}>
                                <div className="flex items-center gap-2">
                                    <BookOpenCheck className="main-color  w-8 h-8 mt-1" />
                                    <p>Des approches douces et actives, selon l’âge et la langue</p>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement animation="slideLeft" delay={500}>
                                <div className="flex items-center gap-2">
                                    <Users className="main-color  w-8 h-8 mt-1" />
                                    <p>Séances 100 % en ligne, en mini-groupes ou individuels</p>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section>
            </AnimatedElement>

            {/* SECTION 4 - Formules proposées */}
                <section className="py-10 px-5 md:px-20">
                    <AnimatedText text="Formules proposées" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color md:text-end" />
                    <div className="overflow-x-auto mt-6  rounded-2xl shadow-2xl">
                        <AnimatedElement animation="fadeIn" delay={1000}>
                            <table className="w-full text-left border border-gray-700">
                                <thead className="bg-main-color text-white">
                                    <tr>
                                        <th className="p-4">Format</th>
                                        <th className="p-4">Volume horaire/mois</th>
                                        <th className="p-4">Fréquence</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-white ">
                                    <tr className="border-t duration-300 hover:bg-main-color-opacity">
                                        <td className="p-4">Séance individuelle</td>
                                        <td className="p-4">12 heures</td>
                                        <td className="p-4">3x / semaine</td>
                                    </tr>
                                    <tr className="border-t duration-300 hover:bg-main-color-opacity">
                                        <td className="p-4">Mini-groupe (5 max)</td>
                                        <td className="p-4">12 heures</td>
                                        <td className="p-4">3x / semaine</td>
                                    </tr>
                                    <tr className="border-t duration-300 hover:bg-main-color-opacity">
                                        <td className="p-4">Club Oral Créatif</td>
                                        <td className="p-4">4 heures</td>
                                        <td className="p-4">1x / semaine</td>
                                    </tr>
                                </tbody>
                            </table>
                        </AnimatedElement>
                    </div>
                </section>
           

            {/* SECTION 5 - Résultats */}
            <AnimatedElement animation="fadeIn" delay={400}>
                <section className="py-10 px-5 md:px-20">
                    <AnimatedText text="Résultats observés chez les enfants" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                    <div className="mt-6">
                        <AnimatedElement animation="scaleIn" delay={1200}>
                            <TextCheck table={observedResults} color="main-color" />
                        </AnimatedElement>
                    </div>
                </section>
            </AnimatedElement>

            {/* SECTION 6 - Pourquoi Oralise Bourgeons ? */}
            <AnimatedElement animation="slideUp" delay={300}>
                <section className="py-10 px-5 md:px-20 flex flex-col-reverse md:flex-row gap-8 items-center md:items-end justify-center md:justify-end">
                    <div className="w-full md:w-auto">
                        <img
                            src="/images/children/child.webp"
                            alt="Formation Oralise Bourgeons"
                            className="rounded-xl border-2 border-main-color max-w-lg w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col  w-full md:w-auto">
                        <AnimatedText text="Pourquoi Oralise Bourgeons ?" type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color" />
                        <div className="space-y-4 text-gray-700 dark:text-white mt-6 flex flex-col items-start">
                            {points.map(({ text, icon: Icon }, index) => (
                                <AnimatedElement key={index} animation="slideLeft" delay={500 + index * 200}>
                                    <div className="flex md:flex-row gap-2  items-start text-left md:text-right">
                                        <Icon className="main-color w-5 h-5 mt-1" />
                                        <p className="max-w-xs">{text}</p>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedElement>

            {/* SECTION 7 - Call to action final */}
            <AnimatedElement animation="fadeIn" delay={400}>
                <section className="flex flex-col py-10 px-5 md:px-20 items-start  md:gap-6">
                    <AnimatedText text="Chaque enfant mérite de se sentir à l’aise avec sa voix." type="typing" speed={50} className="text-2xl md:text-4xl font-bold main-color w-2/3 md:mb-4" />
                    <AnimatedText text="Offrez-lui un espace d’expression joyeux, encadré, et pensé pour l’aider à grandir avec assurance." type="reveal" delay={1600} className="max-w-3xl  mb-6" />
                    <div className="flex flex-col sm:flex-row justify-center items-center mx-auto gap-4">
                        <AnimatedElement animation="scaleIn" delay={1800}>
                            <WhatsAppButton text=" Réserver une séance d’essai gratuite" textMessage="Bonjour Oralise, je suis intéressé(e) par votre formation pour enfants et je voudrais réserver une séance gratuite"/>
                           
                        </AnimatedElement>
                        <AnimatedElement animation="scaleIn" delay={2000}>
                            <WhatsAppButton text="Discuter d’un programme personnalisé" textMessage="Bonjour Oralise, je suis intéressé(e) par votre formation pour enfants et je voudrais réserver une séance gratuite" className="bg-secondary-color shadow-none"/>
                            
                        </AnimatedElement>
                    </div>
                </section>
            </AnimatedElement>
        </>
    );
};

export { ChildrenTraining };