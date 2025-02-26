import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex overflow-scroll flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-48 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left md:w-1/2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mt-10 md:mt-0">
          Digital Marketing
        </h1>
        <h2 className="text-lg sm:text-2xl mt-4 leading-relaxed">
          Boost Your Business with Expert Digital{" "}
          <br className="hidden md:block" /> Marketing Strategies
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-700 w-40 h-12 mt-6 rounded-full text-white hover:bg-blue-800 transition-all"
        >
          Get Started Now
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
      >
        <img
          src="./hero.png"
          alt="Digital Marketing"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg"
        />
      </motion.div>
    </div>
  );
};

export default Home;
