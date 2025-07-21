import { Banner } from "../components/Banner";
import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { Title } from "../components/Title";
import { Users, Smile, BookOpenCheck, Speech } from "lucide-react";



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
            <Banner
                title="Oralise Bourgeons : l’oral épanoui dès l’enfance."
                description="Développer la parole, la confiance et l’expression des enfants dès le plus jeune âge. Des séances ludiques, vivantes et bienveillantes pour faire germer leur voix."
                btnText="Réserver une séance d’essai gratuite"
                image="/images/children/banner.jpg"
            />

            {/* SECTION 2 - Pourquoi une formation orale pour enfants */}
            <section className="py-10 px-5 md:px-20 md:mt-8 flex flex-col items-start ">
                <Title title="Parler bien, ça commence tôt." color />
                <div className="max-w-4xl text-left mt-6 text-lg ">
                    <p>
                        À l’heure des écrans et du stress scolaire, savoir s’exprimer clairement,
                        raconter, argumenter ou lire à voix haute devient un véritable super-pouvoir
                        pour les enfants.
                    </p>
                    <div className="mt-6">
                        <TextCheck table={trainingBenefits} color="main-color" />
                    </div>
                </div>
            </section>

            {/* SECTION 3 - Pour qui ? */}
            <section className="py-10 px-5 md:px-20 flex flex-col justify-center items-start">
                <Title title="Pour qui ?" color />
                <div className="grid gap-6 md:grid-cols-2 mt-6 items-center ">
                    <div>
                        <p>
                            Enfants de 6 à 12 ans et des Ados de 13 à 17 ans, débutants ou déjà
                            sensibilisés à une langue. Adapté aux enfants francophones comme à ceux
                            qui veulent apprendre une langue étrangère (Français, Anglais).
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Smile className="main-color w-8 h-8 mt-1" />
                            <p>Des formateurs formés à la pédagogie enfantine</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpenCheck className="main-color  w-8 h-8 mt-1" />
                            <p>Des approches douces et actives, selon l’âge et la langue</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="main-color  w-8 h-8 mt-1" />
                            <p>Séances 100 % en ligne, en mini-groupes ou individuels</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - Formules proposées */}
            <section className="py-10 px-5 md:px-20">
                <Title title="Formules proposées" color className="text-end" />
                <div className="overflow-x-auto mt-6  rounded-2xl shadow-2xl">
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
                </div>
            </section>

            {/* SECTION 5 - Résultats */}
            <section className="py-10 px-5 md:px-20">
                <Title title="Résultats observés chez les enfants" color />
                <div className="mt-6">
                    <TextCheck table={observedResults} color="main-color" />
                </div>
            </section>

            {/* SECTION 6 - Pourquoi Oralise Bourgeons ? */}
            <section className="py-10 px-5 md:px-20 flex flex-col-reverse md:flex-row gap-8 items-center md:items-end justify-center md:justify-end">
                <div className="w-full md:w-auto">
                    <img
                        src="/images/children/banner.jpg"
                        alt="Formation Oralise Bourgeons"
                        className="rounded-xl border-2 border-main-color max-w-lg w-full object-cover"
                    />
                </div>

                <div className="flex flex-col  w-full md:w-auto">
                    <Title title="Pourquoi Oralise Bourgeons ?" color />
                    <div className="space-y-4 text-gray-700 dark:text-white mt-6 flex flex-col items-start">
                        {points.map(({ text, icon: Icon }, index) => (
                            <div key={index} className="flex md:flex-row gap-2  items-start text-left md:text-right">
                                <Icon className="main-color w-5 h-5 mt-1" />
                                <p className="max-w-xs">{text}</p>


                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* SECTION 7 - Call to action final */}
            <section className="flex flex-col py-10 px-5 md:px-20 items-start  md:gap-6">
                <Title title=" Chaque enfant mérite de se sentir à l’aise avec sa voix." color className="w-2/3 md:mb-4" />
                <p className="max-w-3xl  mb-6">
                    Offrez-lui un espace d’expression joyeux, encadré, et pensé pour l’aider à grandir avec assurance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center mx-auto gap-4">
                    <Button label="Réserver une séance d’essai gratuite" to="/contact" changeColor={true} />
                    <Button label="Discuter d’un programme personnalisé" to="/contact" className="outlined" />
                </div>
            </section>
        </>
    );
};

export { ChildrenTraining };