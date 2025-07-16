// src/components/Loader.tsx
const Loader = () => {

  return (
  <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black ">
    <div className="relative w-[190px] h-[190px] flex justify-center items-center">
      <div className="absolute w-[190px] h-[190px] rounded-full border-b-[8px] border-b-pink-400 border-transparent border-solid animate-rotate1"></div>
      <div className="absolute w-[190px] h-[190px] rounded-full border-b-[8px] border-b-pink-600 border-transparent border-solid animate-rotate2"></div>
      <div className="absolute w-[190px] h-[190px] rounded-full border-b-[8px] border-b-cyan-400 border-transparent border-solid animate-rotate3"></div>
      <div className="absolute w-[190px] h-[190px] rounded-full border-b-[8px] border-b-yellow-400 border-transparent border-solid animate-rotate4"></div>
      <div className="text-black dark:main-color absolute text-2xl font-bold select-none">Oralise</div>
    </div>
  </div>
);



};

export default Loader;

