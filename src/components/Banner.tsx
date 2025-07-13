const Banner = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16 px-6 md:px-20 py-10 bg-white rounded-3xl shadow-xl">
                {/* Image */}
                <div className="w-full md:w-1/2 h-80 relative">
                    <img
                        src="/image.jpg"
                        alt="Banner"
                        className="w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-95"
                    />
                </div>

                {/* Text*/}
                <div className="w-full md:w-1/2 flex flex-col gap-6 items-start text-center md:text-left">
                    <h1 className="text-sky-600 font-extrabold text-3xl md:text-5xl leading-tight tracking-wide">
                        Welcome to Our Website
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Discover amazing content, explore our services, and connect with us. Your journey starts here!
                    </p>
                    <button className="bg-sky-600 hover:bg-sky-700 transition-colors duration-300 text-white px-6 py-3 rounded-full shadow-md">
                        Get Started
                    </button>
                </div>
            </div>

        </>
    )

}

export { Banner }