import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, CompanyX",
    image: "./men1.jpg",
    text: "This service is fantastic! It has truly helped my business grow.",
  },
  {
    name: "Amliya ker",
    role: "Marketing Manager",
    image: "./men2.jpeg",
    text: "I highly recommend this. Their team is super supportive!",
  },
  {
    name: "Sara Jonson",
    role: "Entrepreneur",
    image: "./men3.jpeg",
    text: "A game-changer for my company. Amazing experience overall.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-10 mb-20 shadow-2xl">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6 text-center bg-white shadow-md rounded-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

     
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default Testimonials;
