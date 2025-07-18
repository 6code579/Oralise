import Button  from "./Button";
import { TextCheck } from "./TextCheck";
import { Title } from "./Title";
import Flag from "react-world-flags";

// ProductList component to display the products in a scrolling banner
function ProductList() {
    const products = [
        {
            id: 1,
            name: "Coaching",
        },
        {
            id: 2,
            name: "Anglais",
        },
        {
            id: 3,
            name: "Prise de parole en public",
        },
        {
            id: 4,
            name: "Gestion du stress",
        },
        {
            id: 5,
            name: "Communication",
        },
        {
            id: 6,
            name: "Leadership",
        },
        {
            id: 7,
            name: "Développement personnel",
        },
        {
            id: 8,
            name: "Négociation",
        },
        {
            id: 9,
            name: "Gestion du temps",
        },
        {
            id: 10,
            name: "Travail d'équipe",
        },

    ];
    return (
        <div className="w-full bg-main-color-opacity dark:bg-gray-800/70 mx-auto py-4 overflow-hidden mt-5 shadow-lg">
            <div className="whitespace-nowrap animate-scroll flex gap-9 items-center">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="inline-block bg-white dark:bg-gray-700 shadow-lg rounded-full px-5 md:px-8 py-3 text-lg font-semibold main-color mx-2 transition-transform duration-300 hover:scale-105 hover:bg-main-color-opacity hover:text-white hover:dark:bg-main-color"
                    >
                        <a href="#">{product.name}</a>
                    </div>

                ))}
            </div>
            <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 6s linear infinite;
                }
            `}</style>
        </div>
    );
}

//why chosee oralise component

const Whychoseoralise = () => {
    const CheckElement = [
        {
            id: 1,
            name: "Pratique intensive de l’oral",
        },
        {
            id: 2,
            name: "Club de communication avec effectif réduit",
        },
        {
            id: 3,
            name: "Formations basées sur les objectifs de l'apprenant",
        },
        {
            id: 4,
            name: "Formateurs bienveillants et expérimentés",
        },
        {
            id: 5,
            name: "Suivi personnalisé + espace étudiant digitale",
        },
        {
            id: 6,
            name: "Formations flexibles et accessibles",
        }
    ]
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-5 px-5 md:px-20 py-10 w-full md:w-full md:max-w-none">


            {/* Texte */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 items-start  md:gap-6   md:text-left">
                <Title title="Pourquoi choisir Oralise ?" color={true} />
                <span className="italic main-color font-semibold text-lg sm:text-xl md:text-2xl">Parce que bien parler change tout.</span>
                <p className="text-base sm:text-lg md:text-xl mb-10">
                    Chez Oralise, nous croyons que la parole transforme.
                    Nous vous aidons à libérer votre voix, renforcer votre confiance et maîtriser la communication dans la langue de votre choix
                    <div className="ml-6 mt-4 gap-2">

                        {
                            CheckElement.map((item) => (
                                <span key={item.id} className="flex gap-2 items-center">
                                    <TextCheck text={item.name} color="main-color"/>
                                </span>
                            ))
                        }

                    </div>
                </p>
                <Button label="Je prends un rendez-vous" changeColor={true}/>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2  lg:h-full relative order-1 md:order-none">
                <img src="/images/why.png" alt="whychooseOralise" className="w-full h-full object-cover   transition-transform duration-300 hover:scale-90 " />
            </div>
        </div>
    )
}


const Language = () => {
    const LangElement = [
        {
            id: 1,
            title: "Français",
            description: "Du niveau débutant (A1) au niveau avancé (C2), nous vous aidons à développer votre aisance à l’oral dans la vie quotidienne, en contexte professionnel ou pour des concours.",
            flagCode: "FR",

        },
        {
            id: 2,
            title: "Anglais",
            description: "Pour travailler à l’international, réussir un entretien ou vivre à l’étranger, Oralise vous accompagne dans l’apprentissage d’un anglais fluide et impactant de zéro à héro.",
            flagCode: "GB",
        }
    ]

    return (
        <>
            <div className="flex flex-col items-start justify-start gap-8 mt-5 py-10 w-full">

                <div className="w-full h-40 md:h-96 items-start">
                    <img src="/images/language.jpg" alt="image des langues" className="w-full h-40 md:h-96 object-cover" />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full px-5 md:px-20 md:mt-12">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 items-start  md:gap-8   md:text-left md:px-20">
                        <Title title="Parlez français et anglais avec aisance" color={true}/>
                        <span className="italic main-color font-semibold text-lg sm:text-xl md:text-2xl">Prenez la parole dans la langue qui sert vos ambitions.</span>
                        <p className="text-base sm:text-lg md:text-xl ">
                            Oralise vous offre des formations en français et en anglais, adaptées à vos besoins.
                            Que ce soit pour le travail, les études ou les voyages, nous vous aidons à devenir un orateur confiant et compétent dans les deux langues.
                        </p>
                        <Button label="Contactez-nous maintenant" changeColor={true} />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-8 items-start md:text-left md:px-20">
                        {
                            LangElement.map((item) => (
                                <div key={item.id} className="flex flex-col gap-4 items-start">
                                    <div className="flex items-center gap-2">
                                        <Flag code={item.flagCode} style={{ width: '30px', height: '20px' }} />
                                        <h3 className="font-semibold main-color text-2xl">{item.title}</h3>
                                    </div>
                                    <p className="text-base sm:text-lg md:text-xl">{item.description}</p>
                                    <Button label=" En savoir plus"  changeColor={true}/>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

//section of training and coaching
const TrainingAndCoaching = () => {
    const Training = [
        {
            id: 1,
            title:"Formation individuelle en ligne",
            description: "Un formateur dédié, une progression sur mesure.Apprenez à votre rythme, avec un accompagnement 100 % personnalisé.",
            image: "/images/training1.jpg",
            status: "Nouveau"
        },
        {
            id: 2,
            title:"Formation en groupe en ligne",
            description: "Rejoignez une dynamique collective dans un cadre interactif et bienveillant.Travaillez l’expression orale dans des situations concrètes et variées.",
             image: "/images/training2.jpg",
            status: "Ancien"
        },
        {
            id: 3,
            title:"Formation en entreprise en ligne ou sur site",
            description: "Faites progresser vos équipes avec des modules adaptés à vos objectifs professionnels.Horaires flexibles, résultats mesurables, formateurs spécialisés.",
            image: "/images/training3.jpg",
            status: "Nouveau"
        },
        {
            id: 4,
            title:"Formation pour enfants en ligne",
            description: "Apprendre une langue en s'amusant, dès le plus jeune âge.Des séances ludiques, animées par des formateurs spécialisés en pédagogie enfantine.",
            image: "/images/training4.jpg",
            status: "Nouveau"
        },
    ]
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-8 md:mt-8 px-5 md:px-20 py-10 w-full text-center">
                <Title title="Formations et coaching" color={true}/>
                <span className="italic main-color font-semibold text-lg sm:text-xl md:text-2xl">Développez vos compétences orales avec nos formations et coaching.</span>
                <p className="text-base sm:text-lg md:text-xl mb-10">
                    Oralise propose des formations interactives et du coaching personnalisé pour vous aider à maîtriser l'art de la communication orale.
                    Que ce soit pour le travail, les études ou la vie quotidienne, nous vous accompagnons dans votre parcours d'apprentissage et dans celui de vos enfants.
                </p>
                </div>
            <div className="flex flex-wrap justify-center gap-12  md:mt-5 place-items-center">
                {/*card training*/}
                {Training.map((item) => (
                    <div key={item.id} className="card bg-white dark:bg-gray-800  shadow-2xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105   border border-gray-200  dark:border-gray-700 max-w-xs w-full flex flex-col">
                        <div className="relative w-full h-40 overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            <div className="absolute top-2 right-2 bg-main-color text-white text-xs px-3 py-1 rounded-full shadow-md font-bold uppercase tracking-wide">{item.status}</div>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-3 justify-between">
                            <h3 className="text-lg md:text-xl font-bold main-color mb-1">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base flex-1">{item.description}</p>
                            <div className="mt-4 flex justify-start">
                                <Button label="En savoir plus"  changeColor={true}/>
                            </div>
                        </div>
                    </div>
                ))}
            
            </div>
        </>
    )
}

const HomePage = () => {
    return (
        <>
            <ProductList />
            <Whychoseoralise />
            <Language />
            <TrainingAndCoaching />
        
        </>
    );
}

export { HomePage };