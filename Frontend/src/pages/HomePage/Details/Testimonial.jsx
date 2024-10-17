import React, { useEffect } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });  // Initialize AOS animations
  }, []);

  const testimonials = [
    {
      quote: "Engage with our professional real estate agents to find your dream home. The process was smooth and efficient!",
      name: "Kliva Devs",
      role: "Happy Customer",
    },
    {
      quote: "The service I received was exceptional. I found my new home in no time, thanks to their professional advice.",
      name: "John Smith",
      role: "Satisfied Buyer",
    },
    {
      quote: "I highly recommend their real estate services! They truly care about your preferences and make the process stress-free.",
      name: "Emily Clark",
      role: "First-Time Buyer",
    },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
          Testimonials
        </h2>

        {/* Testimonial Carousel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
              data-aos="zoom-in" 
              data-aos-delay={index * 200}
            >
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <h3 className="mt-4 text-xl font-semibold text-blue-600">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="800">
          <button
            onClick={() => window.location.href = '/testimonials'}
            className="bg-gray-100 text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
