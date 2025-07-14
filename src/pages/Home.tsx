import { Banner } from "../components/Banner"
import { HomePage } from "../components/homeElement"

function Home() {
    return (
        <>
            <Banner title="Parlez. Progressez. Brillez." description="Oralise,est une promesse. 
Inspiré de l'oralité, Oralise évoque l'action de rendre oral, de donner vie à vos idées et à votre voix. C'est l'engagement de vous guider vers la maîtrise de l'expression orale, pour que vous puissiez vous faire entendre.
Développez votre aisance à l’oral en français et en anglais grâce à des formations interactives, humaines et 100 % en ligne.
"  btnText="Découvrir nos offres"  image="images/image.jpg"/>
            <HomePage />

        </>

    )
}

export { Home }