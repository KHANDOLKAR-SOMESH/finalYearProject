import React from "react";

const UserCard = ({ name }) => {
  return (
    <div className="w-72 h-40 bg-zinc-800 p-5 rounded-xl mt-12">
      <div className="flex justify-between">
        <div className="rounded-[50%]">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-picture-7018070-5847066.png?f=webp&w=256" style={{'height':'40px'}} alt="image" />
        </div>
        <div className="text-white">{name}</div>
        <div className="text-black bg-green-300 h-6 text-center rounded-lg w-12">
          active
        </div>
      </div>

      <div className="border border-gray-500 h-14 mt-10 rounded-xl text-white text-center flex items-center justify-center">
        <span>Contact for more</span>
      </div>
    </div>
  );
};

export default UserCard;
