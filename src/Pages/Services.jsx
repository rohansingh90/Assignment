import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBullhorn,
  FaCode,
  
} from "react-icons/fa";
const services = [
    { icon: <FaChartLine />, title: "SEO Optimization", description: "Improve your search engine ranking and visibility." },
    { icon: <FaBullhorn />, title: "Social Media Marketing", description: "Boost your online presence with social media campaigns." },
    { icon: <FaCode />, title: "Web Development", description: "Custom website solutions tailored to your business." },
  ];
  
const Services = () => {
  return (
    <div className="bg-gray-100  min-h-screen   light:bg-gray-300 px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto hover:transition-all">
      {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 dark:text-black p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
