import React from "react";

const tech = ({subtitle , desc}) => {
  return (
    <div className=" ">
      <div className="p-5 md:p-10 w-[35vw] min-h-[20vw] border  border-zinc-700 bg-black/20 rounded-2xl text-center text-white  ">
        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
          {subtitle}
        </span>
        <h2 className="text-xl md:text-xl font-bold mt-4">
          {desc}
        </h2>
       
      </div>
    </div>
  );
};

export default tech;
