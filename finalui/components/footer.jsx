import React from "react";

const footer = () => {
  return (
    <footer className="bg-gradient-to-l from-black via-green-950 to-black rounded-lg shadow-sm m-4">
    <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
    <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-100 text-center"></div>
    <span className="block text-sm md:text-xl font-bold text-gray-500 text-center dark:text-gray-400">
      © 2024-2025 <a className="hover:underline">BE PROJECT</a>. GEC IT.
    </span>
  </footer>
  
  );
};

export default footer;
