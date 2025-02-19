
export default function HeroSection() {
    return (
        <div className="bg-[rgb(24,24,27)] bg-[radial-gradient(at_61%_8%,rgb(65,158,175)_0px,transparent_70%),radial-gradient(at_14%_89%,rgb(78,187,206)_0px,transparent_50%)] min-h-screen flex items-center">
            <div className="container mx-auto px-4 md:px-2 flex flex-col pt-32 md:pt-0 md:flex-row items-center">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Generate Seatplans
                    </h1>
                    <p className="text-xl text-gray-200 mb-6">
                        Fast - Free - Forever
                    </p>
                    <button className="bg-white text-indigo-500 px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition duration-300">
                        Get Started
                    </button>
                </div>
                {/* Image Content */}
                <div className="flex-1 mt-10 md:mt-0 ">
                    <img
                        src="/mockup.png"
                        alt="Website Mockup"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
