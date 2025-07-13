import { Button } from "./Button";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:mt-16 px-5 md:px-20 py-10 duration-500">
      {/* Image */}
      <div className="w-full md:w-1/2 h-80 lg:h-96 object-cover  relative ">
        <img
          src="images/image.jpg"
          alt="Banner"
          className="w-full h-full object-cover  scale-96 rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-90"
        />
      </div>

      {/* Text */}
      <div className="w-full sm:text-start md:w-1/2 flex flex-col gap-4  md:gap-6 md:items-start md:text-left">
        <h1
          className="main-color font-extrabold text-5xl md:text-5xl leading-tight tracking-wider transition-all duration-500"
        >
          Parlez. Progressez. Brillez.

        </h1>

        <p className="text-gray-600  text-lg leading-relaxed transition-colors duration-500 dark:text-white">
          Oralise, est une promesse !
          Inspiré de l'oralité, <span className="font-bold">Oralise</span>  évoque l'action de rendre oral, de donner vie à vos idées et à votre voix. C'est l'engagement de vous guider vers <span className="font-semibold">la maîtrise de l'expression orale</span>, pour que vous puissiez vous faire entendre.

         <br /> Développez votre aisance à l’oral en <span className="font-bold">français</span> et en <span className="font-bold">anglais</span> grâce à des formations interactives, humaines et 100 % en ligne et en entreprise.
        </p>

        <Button label="Decouvez nos services"></Button>
        
      </div>
    </div>
  );
};

export { Banner };
