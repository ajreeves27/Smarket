import React from "react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <a
    href="#"
    className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
    tabIndex={0}
  >
    <div className="flex items-center justify-center mb-4 text-3xl text-blue-600 dark:text-blue-400">
      <Icon />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </a>
);

export default FeatureCard;
