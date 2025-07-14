import Button from "./Button";
export interface BannerProps {
   title?:string,
   description?: string,
   para: string | JSX.Element;
   btnText?:string
   paraColor?:string
   image?:string
   
}
const Banner = ({ title,description,btnText,para,paraColor,image}: BannerProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:mt-16 px-5 md:px-20 py-10 duration-500">
      {/* Image */}
      <div className="w-full md:w-1/2 h-80 lg:h-96 object-cover  relative ">
        <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover  scale-96 rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-90"
        />
      </div>

      {/* Text */}
      <div className="w-full sm:text-start md:w-1/2 flex flex-col gap-4  md:gap-6 md:items-start md:text-left">
        <h1
          className="main-color font-extrabold text-5xl md:text-5xl leading-tight tracking-wider transition-all duration-500"
        >
          {title}

        </h1>

        <p className="text-gray-600  text-lg leading-relaxed transition-colors duration-500 dark:text-white">
           {description}
        </p>

        {para && <p className={`text-gray-500 text-base ${paraColor}`}>{para}</p>}

        <Button label={btnText} changeColor={true}></Button>
        
      </div>
    </div>
  );
};

export { Banner };
