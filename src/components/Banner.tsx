import React from "react";
import Button from "./Button";
import { AnimatedText } from "./AnimatedText";
import { AnimatedElement } from "./AnimatedElement";

export interface BannerProps {
  title?: string;
  description?: string;
  para?: React.ReactNode;
  btnText?: string;
  paraColor?: string;
  image?: string;
  link:string
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  para,
  btnText,
  paraColor,
  image,
  link
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:mt-16 px-5 md:px-20 py-10 duration-500">
      {/* Image */}
      <div className="w-full md:w-1/2 h-80 lg:h-96 object-cover relative">
        {image && (
          <img
            src={image}
            alt="Banner"
            className="w-full h-full object-cover scale-96 rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-90"
          />
        )}
      </div>

      {/* Texte */}
      <div className="w-full sm:text-start md:w-1/2 flex flex-col gap-4 md:gap-6 md:items-start md:text-left">
        <AnimatedText 
          text={title || ""} 
          type="typing" 
          speed={80} 
          className="main-color font-extrabold text-4xl md:text-5xl leading-tight tracking-wider transition-all duration-500"
        />

        <AnimatedText 
          text={description || ""} 
          type="reveal" 
          delay={1000}
          className="text-gray-600 text-lg leading-relaxed transition-colors duration-500 dark:text-white"
        />

        {para && (
          <AnimatedText 
            text={para as string} 
            type="fadeIn" 
            delay={1500}
            className={`text-gray-500 text-base ${paraColor}`}
          />
        )}

        {btnText && (
          <AnimatedElement animation="scaleIn" delay={2000}>
            <Button label={btnText} changeColor={true} to={link}/>
          </AnimatedElement>
        )}
      </div>
    </div>
  );
};

export { Banner };
