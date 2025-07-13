
import { Title } from "../components/Title";
import Button from "../components/Button";

//main element for french page
const French = () => {
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
                        <Title title="Maîtrisez le français à l’oral, avec méthode et confiance." />
                        <p>
                            Parler français, c’est se faire entendre, se faire comprendre, et progresser dans sa vie personnelle comme professionnelle.
                        </p>
                        <Button label="Je m'inscris" to="/" />
                    </div>

                   
                </div>
                 {/* Image drapeau : visible uniquement sur grand écran */}
                    <div className="hidden lg:block col-span-3 overflow-hidden h-40 md:mt-5">
                        <img
                            src="/images/french/flag.jpg"
                            alt="Drapeau"
                            className="w-full h-full object-cover rounded-3xl shadow-2xl duration-300 hover:scale-95"
                        />
                    </div>
            </div>

        </>
    )
}

export { French };