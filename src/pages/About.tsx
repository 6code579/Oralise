import { TextCheck } from "../components/TextCheck";
import { Leaf, Target, UserCog, Star, Handshake, MessageCircle, Heart, Mic } from "lucide-react";
import { Title } from "../components/Title";

function About() {
    return (
        <main className="text-gray-800 dark:text-white">
            {/* SECTION 1 - Hero */}
            <section className="py-24 px-6 md:px-20 text-center ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 main-color">Oralise. La parole pour transformer.</h1>
                <p className="text-lg max-w-4xl mx-auto ">
                    Parce que parler, c’est bien plus qu’utiliser des mots. C’est s’ouvrir, s’affirmer, réussir.<br />
                    Oralise est né pour accompagner celles et ceux qui veulent oser dire, mieux dire, et briller par la parole.
                </p>
            </section>

            {/* SECTION 2 - Ce que vous recevez */}
            <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="/images/about/banner.jpg" alt="Participants en session" className="rounded-2xl shadow-2xl object-cover w-full h-80 duration-300  scale-95 hover:scale-90" />
                </div>
                <div className="flex flex-col items-start gap-8 ">
                    <Title title="Ce que vous recevez" color />
                    <ul className="space-y-4">
                        {[
                            "Groupes de 5 à 8 participants maximum",
                            "1 formateur modérateur qui anime, corrige, relance",
                            "Séances interactives : discussions, débats, jeux de rôle, mini-présentations",
                            "Suivi personnalisé même en groupe (feedback oral individuel)"
                        ].map((item, index) => (
                            <TextCheck key={index} text={item} color="main-color" />
                        ))}
                    </ul>
                </div>
            </section>

            {/* SECTION 3 - Notre mission */}
            <section className="flex flex-col py-20 px-6 md:px-20 text-center gap-6">
                <Title title="Notre mission" color />
                <p className="text-lg max-w-4xl mx-auto mb-2">
                    Chez Oralise, nous croyons que la parole est un levier de pouvoir personnel, social et professionnel.
                </p>
                <p className="text-lg max-w-5xl mx-auto">
                    Nous avons une seule mission : <strong className="main-color">libérer la voix de chacun, avec méthode, bienveillance et exigence.</strong><br />
                    Que ce soit pour apprendre une langue étrangère, améliorer sa prise de parole, réussir un examen ou un entretien,
                    nous sommes là pour mettre l’oral au service de votre vie.
                </p>
            </section>

            {/* SECTION 4 - Pourquoi Oralise ? */}
            <section className="flex flex-col items-center  py-20 px-6 md:px-20">
                <Title title="Pourquoi Oralise ?" color className=" mb-8 md:mb-12 "  />
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: <Leaf size={32} />, title: "Une méthode unique", text: "Nous combinons pédagogie active, coaching vocal, expression émotionnelle et progression structurée." },
                        { icon: <Target size={32} />, title: "Des résultats visibles", text: "Nos apprenants gagnent en fluidité, en impact, et en confiance dès les premières séances." },
                        { icon: <UserCog size={32} />, title: "Une approche personnalisée", text: "Pas de formule unique. Chaque parcours est adapté à votre profil, votre objectif et votre rythme." }
                    ].map(({ icon, title, text }, index) => (
                        <div key={index} className="flex flex-col bg-main-color-opacity dark:bg-gray-800/70 items-center text-center p-6 rounded-xl shadow-md duration-300 hover:scale-90">
                            <div className="mb-2 text-gray-700 dark:main-color  rounded-full shadow-2xl p-3">{icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:main-color ">{title}</h3>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5 - Le mot du fondateur */}
            <section className="py-20 px-6 md:px-20 text-center max-w-4xl mx-auto ">
                <Title title="Le mot du fondateur" color className="md:mb-6"/>
                <blockquote className="italic text-lg">
                    “J’ai fondé Oralise parce que j’ai moi-même compris que la parole est un superpouvoir. Un pouvoir d’oser, de convaincre, de se réaliser.
                    Mais ce pouvoir, tout le monde ne l’a pas appris. J’ai voulu créer un espace d’entraînement bienveillant, mais exigeant.
                    Un espace où chacun peut apprendre à parler, progresser, et se dépasser.”
                </blockquote>
                <img src="/images/about/foundator.png" alt="icon du fondateur" className="w-24 h-24 rounded-full shadow-2xl object-cover border-4 border-main-color mx-auto my-6 duration-300 hover:scale-90" />
                <p className="mt-4 main-color"><span className="font-extrabold">— Berci KALI</span>, fondateur d’Oralise</p>
            </section>

            {/* SECTION 6 - Nos valeurs */}
            <section className=" bg-main-color-opacity dark:bg-gray-800 py-20 px-6 md:px-20">
                <Title title="Nos valeurs" color className="text-center mb-6 md:mb-12"/>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Star size={32} />, label: "Excellence", text: "Nous visons des résultats concrets, mesurables, durables." },
                        { icon: <Handshake size={32} />, label: "Accessibilité", text: "L’oral pour tous, à tous les âges, à tous les niveaux." },
                        { icon: <MessageCircle size={32} />, label: "Impact", text: "La parole qui change, qui construit, qui connecte." },
                        { icon: <Heart size={32} />, label: "Confiance", text: "Un accompagnement humain, motivant, rassurant." }
                    ].map(({ icon, label, text }, index) => (
                        <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800/70 p-6 rounded-2xl  shadow-2xl text-center duration-300 hover:scale-90">
                            <div className="mb-4 main-color ">{icon}</div>
                            <h3 className="font-semibold text-xl mb-1 main-color">{label}</h3>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 7 - Oralise en chiffres */}
            <section className="py-20 px-6 md:px-20 text-center">
                <Title title="Oralise en chiffres" color className="mb-6 md:mb-8"/>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { value: "+200", label: "personnes accompagnées" },
                        { value: "95 %", label: "de satisfaction dès la 3e séance" },
                        { value: "10", label: "coachs et formateurs partenaires" }
                    ].map(({ value, label }, index) => (
                        <div key={index} className=" dark:bg-gray-800/70 p-6 rounded-xl shadow-2xl duration-300 hover:scale-90 text-center">
                            <div className="text-4xl font-bold main-color mb-2">{value}</div>
                            <p className="text-lg">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 8 - Rejoignez l’aventure */}
            <section className=" px-6 md:px-20 text-center">
                <Title title="Rejoignez l’aventure" color className="mb-6 md:mb-8"/>
                <p className="text-lg mb-6  mx-auto">
                    Vous aussi, vous avez un objectif lié à la parole ? <br/>Une langue à apprendre, une épreuve à réussir, une voix à affirmer ?
                </p>
                <p className="text-lg max-w-4xl mx-auto mb-8">
                    Chez Oralise, vous trouverez plus qu’un formateur. Vous trouverez un espace pour vous exprimer, progresser, vous révéler.
                </p>
                <p className="text-xl font-semibold flex items-center justify-center gap-2">
                    <Mic size={24} className="main-color" /> Et si tout commençait… par la parole ?
                </p>
            </section>
        </main>
    );
}


export { About }