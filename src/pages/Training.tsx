import { Brain, MessageSquare, Users, Mic, PenLine, Speech } from "lucide-react";
import { Title } from "../components/Title";
import { TextCheck } from "../components/TextCheck";
import Button from "../components/Button";
import { ChevronRight } from "lucide-react";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";


function Training() {
    return (
        <div className="space-y-16">

            {/* HERO */}
                <section className="text-start md:text-center py-7 md:py-10 px-5 md:px-20 max-w-6xl mx-auto">
                    <AnimatedText 
                        text="Exprimez-vous. Dans la bonne langue, au bon rythme, avec la bonne méthode."
                        type="typing"
                        speed={60}
                        className="text-4xl md:text-5xl font-bold mb-8 main-color"
                    />
                   <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 sm:gap-8 md:gap-12 md:mt-8 lg:mt-12">
                     <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-muted-foreground order-2 sm:order-1">
                    {
                        [
                            'Parler une langue étrangère',
                                'Progresser à l\'oral',
                            'Réussir un examen',
                                'S\'exprimer avec aisance'
                        ].map((item, index) => (
                                <AnimatedElement key={index} animation="slideLeft" delay={1000 + index * 200}>
                                    <TextCheck text={item} color="main-color"/>
                                </AnimatedElement>
                        ))
                    }

                </div>

                    <AnimatedElement animation="scaleIn" delay={2000}>
                <Button
                    label={
                        <span className="inline-flex items-center gap-2">
                          
                                    Trouvez la formation qui vous correspond  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 font-bold" />
                        </span>
                    }
                            changeColor className="order-1 sm:order-2 w-full sm:w-auto"
                />
                    </AnimatedElement>
               </div>
            </section>

            {/* LANGUAGES */}
                <section className="px-5 md:px-20 max-w-5xl mx-auto space-y-10">
                <Title title="Formations en langues" color />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Français langue étrangère (FLE)",
                        "Français professionnel",
                        "Anglais professionnel",
                        "Anglais général",
                        "Français pour enfants (6–12 ans)",
                        "Français pour ados (13–17 ans)",
                    ].map((label, i) => (
                        <div
                            className="dark:bg-gray-800/70 rounded-2xl p-6 shadow-2xl hover:shadow-md  duration-300 hover:scale-90 "
                        >
                            <TextCheck text={label}  color="main-color" className="main-color text-xl" />
                            <p className="dark:text-white my-3 md:my-4">
                                {
                                    [
                                        "Apprendre ou perfectionner son français pour la vie quotidienne, le travail ou les études. Niveaux : A1 à C2",
                                                "S'exprimer avec clarté et crédibilité dans le monde du travail : mails, réunions, rapports, négociations.",
                                                "Acquérir l'anglais utile pour travailler, voyager ou passer un entretien.",
                                        "Comprendre et discuter en anglais dans la vie de tous les jours. Voyages, études, relations sociales, curiosité.",
                                        "Communication, jeux de rôle, lecture expressive, vocabulaire de la vie quotidienne. Approche ludique & bienveillante.",
                                                "S'exprimer à l'oral, construire un avis, réussir les oraux du collège/lycée, expression personnelle.",
                                    ][i]
                                }
                            </p>
                            <Button label='Je prends un rendez-vous' changeColor className=" mt-2 md:mt-3"/>
                        </div>
                    ))}
                </div>
            </section>

            {/* EXPRESSION & LEADERSHIP */}
                <section className="px-5 md:px-20 max-w-5xl  mx-auto space-y-10">
                <Title title="Formations en expression, leadership & soft skills" color className="text-center" />
                    <AnimatedText 
                        text="Des compétences humaines pour s'affirmer, inspirer et communiquer avec impact. Ces modules vous aident à maîtriser l'art de parler juste et fort."
                        type="reveal"
                        delay={1000}
                        className="text-muted-foreground text-center max-w-3xl mx-auto"
                    />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            icon: Brain,
                            title: "Intelligence émotionnelle et expression",
                                subtitle: "Mieux se comprendre pour mieux s'exprimer.",
                            desc: "Développer la conscience de soi, maîtriser ses émotions, comprendre celles des autres, et apprendre à répondre plutôt que réagir.",
                        },
                        {
                            icon: Mic,
                            title: "Leadership par la parole",
                            subtitle: "Incarnez votre message. Inspirez par votre voix.",
                            desc: "Développer une parole crédible, motivante, respectée. Travailler la posture du leader à travers l'expression, la structure, et la présence vocale.",
                        },
                        {
                            icon: PenLine,
                            title: "Rédaction & prononciation de discours",
                            subtitle: "Écrire pour toucher. Dire pour marquer.",
                            desc: "Accompagner la rédaction de discours personnels ou professionnels, avec un travail de mise en voix.",
                        },
                        {
                            icon: Users,
                            title: "Animation de réunions efficaces (FR/EN)",
                            subtitle: "Ne plus subir les réunions, mais les faire avancer.",
                            desc: "Savoir animer, structurer, cadrer, conclure une réunion en français ou en anglais avec efficacité.",
                        },
                        {
                            icon: MessageSquare,
                            title: "Communication assertive & non violente",
                                subtitle: "Oser dire sans blesser. S'affirmer avec respect.",
                            desc: "Exprimer ses besoins, refuser sans culpabiliser, gérer un désaccord sans conflit.",
                        },
                        {
                            icon: Speech,
                            title: "Pitch & présentation professionnelle",
                            subtitle: "Vendre une idée, une offre, un projet en 3 minutes.",
                            desc: "Créer et délivrer un pitch oral clair, convaincant et professionnel.",
                        },
                    ].map((item, i) => (
                        <div
                            className=" rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-2"
                        >
                            <div className="flex items-center gap-3 text-lg font-semibold main-color">
                                <item.icon className="w-8 h-8 " />
                                <span>{item.title}</span>
                            </div>
                            <p className="italic dark:texte-white">{item.subtitle}</p>
                            <p className="dark:text-white  ">{item.desc}</p>
                            <Button label='Je prends un rendez-vous' changeColor to="/" className="mt-4 md:mt-4"/>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
           
            <section className="text-start md:text-center md:py-16 px-4 max-w-4xl mx-auto space-y-6">
                    <AnimatedText 
                        text="Quand on travaille sa parole, on travaille sa posture. Et quand on change sa posture, tout change."
                        type="typing"
                        speed={50}
                        className="text-2xl font-bold main-color"
                    />
                    <AnimatedElement animation="slideUp" delay={2000}>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <Button label='Réservez un échange gratuit'/>
                     <Button label='Demandez un programme sur mesure' changeColor to="/"/>
                
                </div>
                    </AnimatedElement>
            </section>
           
        </div>
    );
}

export { Training };
