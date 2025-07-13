const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-15 px-5 md:px-20 py-10 duration-500">
      {/* Image */}
      <div className="w-full md:w-1/2 h-80 relative">
        <img
          src="/image.jpg"
          alt="Banner"
          className="w-full h-full object-cover scale-95 rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-90"
        />
      </div>

      {/* Texte */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:gap-6 md:items-start text-center md:text-left">
        <h1
          className="text-sky-500 dark:text-sky-300 font-extrabold text-3xl md:text-5xl leading-tight tracking-wider
          text-shadow-blue dark:text-shadow-glow-dark
          transition-all duration-500"
        >
          Welcome to Our Website
        </h1>

        <p className="text-gray-600  text-lg leading-relaxed transition-colors duration-500">
          Discover amazing content, explore our services, and connect with us. Your journey starts here!
        </p>

        <button
          className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition-colors duration-300
          text-white px-6 py-3 rounded-full shadow-md w-full md:w-auto"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export { Banner };
