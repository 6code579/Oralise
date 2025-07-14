
import { Title } from "../components/Title";
import Button from "../components/Button";
import { TextCheck } from "../components/TextCheck";
import { Banner } from "../components/Banner";
// Banner component for the French page
const BannerFrench = () => {
    return (
        <>
            <div className="w-full max-w-full mx-auto px-4 mt-6 md:px-20 md:mt-16 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl overflow-hidden">

                    {/* Image femme */}
                    <div className="w-full h-64 md:h-auto overflow-hidden order-1 lg:order-none">
                        <img
                            src="/images/french/frenchBanner.jpg"
                            alt="Femme"
                            className="w-full h-full object-cover rounded-3xl shadow-2xl duration-300 hover:scale-95"
                        />
                    </div>

                    {/* Texte */}
                    <div className="flex flex-col justify-center gap-4 px-4 md:px-8 order-2 lg:col-span-2">
                        <Title title="Maîtrisez le français à l’oral, avec méthode et confiance." color={true} />
                        <p>
                            Parler français, c’est se faire entendre, se faire comprendre, et progresser dans sa vie personnelle comme professionnelle.
                        </p>
                        <Button label="Je m'inscris" to="/" changeColor={true} />
                    </div>


                </div>
                {/* Image drapeau : visible uniquement sur grand écran */}
                <div className="hidden lg:block col-span-3 overflow-hidden h-40 md:mt-5">
                    <img
                        src="/images/french/flag.jpg"
                        alt="Drapeau"
                        className="w-full h-full object-cover rounded-3xl duration-300 hover:scale-95"
                    />
                </div>
            </div>
        </>
    )
}


//section type of french training

const TypeTraining = () => {

    const FrenchList = [
        {
            id: 1,
            image: '/images/french/fle.jpg',
            title: 'Formation FLE (Français Langue Étrangère)',
            undertitle: 'Français général pour le quotidien, les échanges, la vie courante.',
            description: 'Nos parcours FLE sont conçus pour les apprenants de tous niveaux (A1 à C2).Vous y apprendrez à vous exprimer dans des situations concrètes : se présenter, poser une question, expliquer une idée, débattre…',
            checkElement: [
                'Formation axée communication',
                'Cours interactifs 100 % en ligne',
                'Vocabulaire et grammaire contextualisés',
                'Jeux de rôle, mises en situation',
                'Formateurs spécialisés FLE'
            ],
            link: '/',
            linkbtn2: '/'
        },
        {
            id: 2,
            image: '/images/french/pro.jpg',
            title: 'Français professionnel',
            undertitle: 'Le français pour booster votre carrière.',
            description: 'Préparez-vous à parler français dans le monde du travail avec aisance et clarté. Idéal pour les entretiens, réunions, présentations, négociations et interactions en entreprise.',
            checkElement: [
                'Pitcher son activité',
                'Répondre au téléphone professionnellement',
                'Rédiger des emails et des rapports',
                'Présenter oralement avec fluidité',
                'Prendre la parole en réunion'
            ],
            link: '/',
            linkbtn2: '/'
        },
        {
            id: 3,
            image: '/images/french/tcf.png',
            title: 'Préparation aux examens / certifications',
            undertitle: 'Préparez-vous pour réussir vos examens officiels.',
            description: 'Nous vous accompagnons pour réussir vos tests de langue française à visée universitaire et professionnelle ou pour le voyage.',
            checkElement: [
                'DELF / DALF (A1 à C2)',
                'TCF / TEF',
                'Examens internes ou tests de placement',
                'Entraînement à l’oral ciblé',
                'Simulations d’examen',
                'Correction personnalisée',
                'Conseils méthodologiques'
            ],
            linkbtn1: '/',
            linkbtn2: '/'
        }
    ]
    return (
        <>
            {/* inspired by tailwindcss.com */}
            <ul className="grid grid-cols-1 md:my-20 bg-main-color-opacity dark:bg-gray-700 shadow-lg xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">

                {
                    FrenchList.map((element) => (
                        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                            <div className="order-1 sm:ml-6 xl:ml-0">
                                <h3 className="mb-1 dark:secondary-color  font-semibold">
                                    <span className="mb-1 block font-bold text-2xl fony-bold  md:py-5 leading-6 secondary-color">{element.title}
                                    </span>
                                    {element.undertitle}
                                </h3>
                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-white ">
                                    <p>{element.description}</p>
                                </div>
                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-white md:mt-4">
                                    <TextCheck table={element.checkElement} color="secondary-color" />
                                </div>

                                <Button label="Je m'inscris" to={element.linkbtn1} className="md:mt-4 md:ml-4 bg-secondary-color hover:bg-secondary-color-hover" />


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
function French() {
    return (
        <>
            <BannerFrench />
            <TypeTraining />
            <Banner title=" Méthode Oralise" description="
Une méthode centrée sur la parole, pas sur les fiches.
Avec Oralise, vous bénéficiez de formations sur mesure, axées sur la pratique, pour développer votre aisance et votre fluidité en communication. 
Notre objectif est simple : vous permettre de gagner en confiance, de vous exprimer clairement et de rayonner dans toutes vos interactions.
Vous apprenez en pratiquant, en répétant, en interagissant." para="Notre promesse :
Vous bénéficiez d'une séance d'essai
Vous pratiquez dès la 1ère séance
Vous êtes écouté, corrigé, encouragé
Vous suivez vos progrès grâce à un tableau personnalisé
Vous pratiquez dans un club de communication" btnText="Je prends rendez-vous" paraColor="main-color"  image="/images/french/1.png"/>
        </>
    );
}

export { French };