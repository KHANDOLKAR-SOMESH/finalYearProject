import React from "react";
import ImageInput from "./imageInput";

const Left = () => {
  return (
    <div className="bg-zinc-800 w-auto h-screen shadow-lg border-l-2 border-gray-950 backdrop-blur p-2">
      <div  className=" flex justify-center items-center w-auto bg-zinc-800 h-[90vh] m-5 rounded-l-2xl shadow-lg shadow-zinc-800 backdrop-blur-sm ">
     <ImageInput/>   

      </div>
    </div>
  );
};

export default Left;
