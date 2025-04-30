import React from "react";

const footer = () => {
  return (
    <footer className="  bg-gradient-to-l bg-black to-black via-green-950 rounded-lg shadow-sm m-4">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="m-10  grid grid-cols-1  md:grid-cols-3 text-neutral-100   text-center"></div>

      <span className="block text-xl font-bold text-gray-500 sm:text-center dark:text-gray-400">
        © 2024-2025 <a class="hover:underline">BE PROJECT</a>. GEC IT.
      </span>
    </footer>
  );
};

export default footer;
