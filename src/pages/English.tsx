import { TextCheck } from "../components/TextCheck";
import { Banner } from "../components/Banner";
import { AnimatedElement } from "../components/AnimatedElement";
import { AnimatedText } from "../components/AnimatedText";
import { WhatsAppButton } from "../components/WhatsappBtn";

//section type of english training
const TypeTraining = () => {
    const FrenchList = [
        {
            id: 1,
            image: '/images/english/general.webp',
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
            message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Anglais général et je voudrais discuter avec vous pour prendre rendez-vous!"
        },
        {
            id: 2,
            image: '/images/english/pro.webp',
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
            message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Anglais professionnel et je voudrais discuter avec vous pour prendre rendez-vous!"
        },
        {
            id: 3,
            image: '/images/english/prepa.webp',
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
            message: "Bonjour Oralise, je suis intéressé(e) par votre formation en Préparation aux tests et certifications et je voudrais discuter avec vous pour prendre rendez-vous!"
        }
    ]
    return (
            <ul className="grid grid-cols-1 md:my-8 bg-main-color-opacity dark:bg-gray-700 shadow-lg xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                {
                    FrenchList.map((element, idx) => (
                        <AnimatedElement key={element.id} animation="scaleIn" delay={400 + idx * 200}>
                        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                            <div className="order-1 sm:ml-6 xl:ml-0 ">
                                    <AnimatedText text={element.title} type="typing" speed={50} className="mb-4 block font-bold text-2xl md:py-5 leading-6 main-color" />
                                    <span className="mb-3 dark:main-color font-semibold">{element.undertitle}</span>
                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-white ">
                                        <AnimatedText text={element.description} type="reveal" delay={600} />
                                </div>
                                <div className="prose prose-slate prose-sm text-slate-600 dark:text-white mt-3 md:mt-4">
                                        <AnimatedElement animation="slideLeft" delay={800}>
                                    <TextCheck table={element.checkElement} color="main-color" />
                                        </AnimatedElement>
                                </div>
                                    <AnimatedElement animation="scaleIn" delay={1000}>
                                 <WhatsAppButton text="Je m'inscris" textMessage={element.message} className="mt-4"/>
                                    </AnimatedElement>
                            </div>
                            <img
                                src={element.image}
                                alt={element.title}
                                className="w-full md:h-96 object-cover rounded-3xl shadow-lg bg-slate-50 mb-6 sm:w-full sm:mb-0 xl:mb-6 xl:w-full duration-300 hover:scale-95"
                            />
                        </li>
                        </AnimatedElement>
                    ))
                }
            </ul>
    )
}

function English() {
    return (
        <>
            <AnimatedElement animation="fadeIn" delay={100}>
               
                <Banner title="Step Up !" description="Parlez anglais avec aisance, où que vous soyez. L’anglais est la langue du monde professionnel, des études, et des voyages. Oralise vous accompagne pour parler anglais avec fluidité, confiance et impact." btnText="Je m'inscris" image="/images/english/banner.webp" link="/contact"/>
            </AnimatedElement>
            <TypeTraining />
            <AnimatedElement animation="slideUp" delay={200}>
               
            <Banner
                title="Méthode Oralise (adaptée à l’anglais)"
                description="Apprenez à parler anglais en parlant, tout simplement."
                    para="Nos formations en anglais privilégient l’interaction, la répétition guidée et la spontanéité. Pas de longs cours théoriques, mais de la pratique orale, ciblée, avec correction bienveillante. Les + Oralise : Formation centrée sur la communication active, Coachs expérimentés bilingues, Plateforme de suivi, Flexibilité horaire complète"
                btnText="Je prends rendez-vous"
                paraColor="main-color"
                image="/images/french/1.webp" link='/contact'
            />
            </AnimatedElement>
        </>
    );
}

export { English };