import { Brain, MessageSquare, Users, Mic, PenLine, Speech } from "lucide-react";
import { Title } from "../components/Title";
import { TextCheck } from "../components/TextCheck";
import Button from "../components/Button";
import { ChevronRight } from "lucide-react";


function Training() {
    return (
        <div className="space-y-16">

            {/* HERO */}
            <section className="text-center py-16 px-4 max-w-6xl mx-auto">
                <Title title="Exprimez-vous. Dans la bonne langue, au bon rythme, avec la bonne méthode.
" color/>
               <div className="flex justify-between items-center gap-12 md:mt-12">
                 <div className="space-y-2 text-lg text-muted-foreground ">
                    {
                        [
                            'Parler une langue étrangère',
                            'Progresser à l’oral',
                            'Réussir un examen',
                            'S’exprimer avec aisance'
                        ].map((item, index) => (
                            <TextCheck key={index} text={item} color="main-color"/>
                        ))
                    }

                </div>

                <Button
                    label={
                        <span className="inline-flex items-center gap-2">
                          
                            Trouvez la formation qui vous correspond  <ChevronRight className="w-5 h-5 font-bold" />
                        </span>
                    }
                    changeColor className=""
                />
               </div>
            </section>

            {/* LANGUAGES */}
            <section className="px-4 max-w-5xl mx-auto space-y-10">
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
                            key={i}
                            className="dark:bg-gray-800/70 rounded-2xl p-6 shadow-2xl hover:shadow-md transition-shadow duration-800 hover:scale-90"
                        >
                            <TextCheck text={label}  color="main-color" className="main-color text-xl" />
                            <p className="dark:text-white md:my-4">
                                {
                                    [
                                        "Apprendre ou perfectionner son français pour la vie quotidienne, le travail ou les études. Niveaux : A1 à C2",
                                        "S’exprimer avec clarté et crédibilité dans le monde du travail : mails, réunions, rapports, négociations.",
                                        "Acquérir l’anglais utile pour travailler, voyager ou passer un entretien.",
                                        "Comprendre et discuter en anglais dans la vie de tous les jours. Voyages, études, relations sociales, curiosité.",
                                        "Communication, jeux de rôle, lecture expressive, vocabulaire de la vie quotidienne. Approche ludique & bienveillante.",
                                        "S’exprimer à l’oral, construire un avis, réussir les oraux du collège/lycée, expression personnelle.",
                                    ][i]
                                }
                            </p>
                            <Button label='Je prends un rendez-vous' changeColor/>
                        </div>
                    ))}
                </div>
            </section>

            {/* EXPRESSION & LEADERSHIP */}
            <section className="px-4 max-w-5xl mx-auto space-y-10">
                <Title title="Formations en expression, leadership & soft skills" color className="text-center" />
                <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Des compétences humaines pour s’affirmer, inspirer et communiquer avec impact.
                    Ces modules vous aident à maîtriser l’art de parler juste et fort.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            icon: Brain,
                            title: "Intelligence émotionnelle et expression",
                            subtitle: "Mieux se comprendre pour mieux s’exprimer.",
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
                            subtitle: "Oser dire sans blesser. S’affirmer avec respect.",
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
                            key={i}
                            className=" rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-2"
                        >
                            <div className="flex items-center gap-3 text-lg font-semibold main-color">
                                <item.icon className="w-8 h-8 " />
                                <span>{item.title}</span>
                            </div>
                            <p className="italic dark:texte-white">{item.subtitle}</p>
                            <p className="dark:text-white  ">{item.desc}</p>
                            <Button label='Je prends un rendez-vous' changeColor to="/" className="md:mt-4"/>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-start md:text-center py-16 px-4 max-w-4xl mx-auto space-y-6">
                <p className="text-2xl  font-bold main-color">
                    “Quand on travaille sa parole, on travaille sa posture.
Et quand on change sa posture, tout change.”
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <Button label='Réservez un échange gratuit'/>
                     <Button label='Demandez un programme sur mesure' changeColor to="/"/>
                
                </div>
            </section>
        </div>
    );
}

export { Training };
