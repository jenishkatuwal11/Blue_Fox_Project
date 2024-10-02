const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/src/assets/HeroSection.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">
          Search and Find Your Luxury House
        </h1>
        <p className="mt-4 text-lg">
          With a robust selection of popular properties on hand
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
            Our Service
          </button>
          <button className="ml-4 bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
