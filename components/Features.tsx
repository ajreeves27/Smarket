import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt, FaApple, FaCoins, FaMoneyBillWave, FaRocket, FaBomb, FaFire, FaLevelUpAlt, FaArrowAltCircleRight, FaRegArrowAltCircleUp, FaUserShield, FaCashRegister } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: FaApple,
      title: "Apple (AAPL)",
      description: "Visit the dedicated Apple stock page for real-time data, charts, and the latest news.",
    },
    {
      icon: FaCoins,
      title: "SCHD ETF",
      description: "Explore the SCHD ETF page for up-to-date performance, dividend info, and key statistics.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Smart Money Moves",
      description: "Actionable tips and strategies to help you save, invest, and grow your wealth efficiently.",
    },
    {
      icon: FaRegArrowAltCircleUp,
      title: "Trending YOLO Stocks",
      description: "Discover high-risk, high-reward stocks that are making waves in the market right now.",
    },
    {
      icon: FaUserShield,
      title: "Safe Dividend Picks",
      description: "Curated list of reliable dividend stocks for building a stable, long-term portfolio.",
    },
    {
      icon: FaCashRegister,
      title: "Bogleheads Portfolio Guide",
      description: "Learn how to build and manage a low-cost, diversified portfolio following Bogleheads principles.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Stocks and Research</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Highlight cool features of your app using the beautifully designed custom cards with icons. You can use any
            icon you want.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
