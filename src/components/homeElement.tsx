import { Button } from "./bouton";
import { Check } from "lucide-react";


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
        <div className="w-full bg-secondary-color-opacity dark:bg-gray-800/70 mx-auto py-4 overflow-hidden mt-5 shadow-lg">
            <div className="whitespace-nowrap animate-scroll flex gap-9 items-center">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="inline-block bg-white dark:bg-gray-700 shadow-lg rounded-full px-5 md:px-8 py-3 text-lg font-semibold main-color mx-2 transition-transform duration-300 hover:scale-105 hover:bg-secondary-color-opacity hover:text-white hover:dark:bg-main-color"
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
                  animation: scroll 18s linear infinite;
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
                <h2 className="main-color font-extrabold text-5xl md:text-5xl leading-tight tracking-wider transition-all duration-500">Pourquoi choisir Oralise ?</h2>
                <span className="italic main-color font-semibold text-xl">Parce que bien parler change tout.</span>
                <p className="text-lg mb-10">
                    Chez Oralise, nous croyons que la parole transforme.
                    Nous vous aidons à libérer votre voix, renforcer votre confiance et maîtriser la communication dans la langue de votre choix
                    <div className="ml-6 mt-4 gap-2">
                       
                       {
                        CheckElement.map((item) => (
                            <span key={item.id} className="flex gap-2 items-center">
                                <div className="flex  gap-2"><Check size={20} className="main-color" /> <span className="text-base font-medium">{item.name}</span></div>
                            </span>
                        ))
                       }  

                    </div>
                </p>
                <Button label="Je prends un rendez-vous" />
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2  lg:h-full relative order-1 md:order-none">
                <img src="/images/why.png" alt="whychooseOralise" className="w-full h-full object-cover   transition-transform duration-300 hover:scale-90 " />
            </div>
        </div>
    )
}


const Language = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-8 mt-5 py-10 w-full">
                <div className="w-full h-96 items-start">
                    <img src="/images/language.png" alt="" className="w-full h-96 object-cover" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 items-start  md:gap-6   md:text-left">
                    <h2 className="main-color font-extrabold text-5xl md:text-5xl leading-tight tracking-wider transition-all duration-500">Parlez français et anglais avec aisance</h2>
                    <span className="italic main-color font-semibold text-xl">Parce que la maîtrise des langues est essentielle.</span>
                    <p className="text-lg mb-10">
                        Oralise vous offre des formations en français et en anglais, adaptées à vos besoins.
                        Que ce soit pour le travail, les études ou les voyages, nous vous aidons à devenir un orateur confiant et compétent dans les deux langues.
                    </p>
                    <Button label="Contactez-nous maintenant" />
                </div>
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
        </>
    );
}

export { HomePage };