import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { Banner } from "../components/Banner";


//section type of french training

const TypeTraining = () => {

    const FrenchList = [
        {
            id: 1,
            image: '/images/english/general.jpg',
            title: 'Anglais général',
            undertitle: 'Anglais pour la vie quotidienne et les échanges internationaux.',
            description: 'Apprenez à vous exprimer en anglais dans des contextes variés : voyage, conversation, échanges sociaux ou familiaux.Nos formateurs anglophones adaptent les contenus à votre niveau et à vos objectifs.',
            checkElement: [
                'A1 à C2 – progression personnalisée',
                'Prononciation et accent',
                'Formation axée sur la communication',
                'Jeux de rôle et mises en situation',
                'Vocabulaire de la vie réelle'
            ],
            link: '/',

        },
        {
            id: 2,
            image: '/images/english/pro.jpg',
            title: 'Anglais professionnel',
            undertitle: 'Préparez-vous à évoluer en contexte international.',
            description: 'Renforcez vos compétences orales pour travailler en anglais dans un cadre professionnel : réunions, entretiens, appels clients, négociations…',
            checkElement: [
                'Business English',
                'Se présenter en contexte business',
                'Conduire une réunion en anglais',
                'Pitch et présentation orale',
                'Rédiger un mail professionnel et le défendre à l’oral'
            ],
            link: '/',

        },
        {
            id: 3,
            image: '/images/english/prepa.jpg',
            title: 'Préparation aux tests et certifications',
            undertitle: 'Passez vos examens d’anglais avec méthode et confiance.',
            description: 'Certifications préparées :',
            checkElement: [
                'Certifications préparées :',
                'TOEIC',
                'TOEFL',
                'IELTS',
                'Avantages :',
                'Entraînements à l’oral intensifs',
                'Stratégies d’examen',
                'Simulations chronométrées',
                'Feedback personnalisé'
            ],
            linkbtn1: '/',

        }
    ]
    return (
        <>
            {/* inspired by tailwindcss.com */}
            <ul className="grid grid-cols-1 md:my-20 bg-main-color-opacity dark:bg-gray-700 shadow-lg xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">

                {
                    FrenchList.map((element) => (
                        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                            <div className="order-1 sm:ml-6 xl:ml-0 ">
                                <h3 className="mb-3 dark:main-color  font-semibold">
                                    <span className="mb-4 block font-bold text-2xl fony-bold  md:py-5 leading-6 main-color">{element.title}
                                    </span>
                                    {element.undertitle}
                                </h3>
                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-white ">
                                    <p>{element.description}</p>
                                </div>
                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-white md:mt-4">
                                    <TextCheck table={element.checkElement} color="main-color" />
                                </div>

                                <Button label="Je m'inscris" to={element.linkbtn1} className="mt-6 md:mt-4 md:ml-4 " changeColor={true} />


                            </div>
                            <img
                                src={element.image}
                                alt={element.title}
                                className="w-full md:h-96 object-cover rounded-3xl shadow-lg bg-slate-50 mb-6 sm:w-full sm:mb-0 xl:mb-6 xl:w-full duration-300 hover:scale-95"
                            />
                        </li>
                    ))
                }

            </ul>
        </>
    )
}





//main element for french page
function English() {
    return (
        <>
            <Banner title="Step Up !" description="Parlez anglais avec aisance, où que vous soyez.
                            L’anglais est la langue du monde professionnel, des études, et des voyages.
                            Oralise vous accompagne pour parler anglais avec fluidité, confiance et impact." btnText="Je m'inscris" image="/images/english/banner.jpg" />
            <TypeTraining />
            <Banner
                title="Méthode Oralise (adaptée à l’anglais)"
                description="Apprenez à parler anglais en parlant, tout simplement."
                para={
                    <>
                        Nos formations en anglais privilégient l’interaction, la répétition guidée et la spontanéité.<br />
                        Pas de longs cours théoriques, mais de la pratique orale, ciblée, avec correction bienveillante.<br /><br />
                        <strong>Les + Oralise :</strong><br />
                        Formation centrée sur la communication active<br />
                        Coachs expérimentés bilingues<br />
                        Plateforme de suivi<br />
                        Flexibilité horaire complète
                    </>
                }
                btnText="Je prends rendez-vous"
                paraColor="main-color"
                image="/images/french/1.png"
            />

        </>
    );
}

export { English };