import React from "react";

const UserCard = ({ name }) => {
  return (
    <div className="w-full sm:w-60 md:w-72 h-auto bg-zinc-800 p-4 md:p-5 rounded-xl mt-6 md:mt-12">
    <div className="flex justify-between items-center mb-4">
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-picture-7018070-5847066.png?f=webp&w=256" className="h-10" alt="image" />
      <div className="text-white">{name}</div>
      <div className="text-black bg-green-300 h-6 text-center rounded-lg w-12 text-xs flex items-center justify-center">
        active
      </div>
    </div>
    <div className="border border-gray-500 h-14 rounded-xl text-white text-center flex items-center justify-center">
      <span>Contact for more</span>
    </div>
  </div>
  
  );
};

export default UserCard;
