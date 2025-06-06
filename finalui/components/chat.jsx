import React from "react";
import Image from "next/image";

const chat = ({ message, url }) => {
  return (
    <div className="flex gap-5" >
      <span>{message}</span>
      <span>
        <Image className="rounded-full" src={url} width={30} height={30} />
      </span>
    </div>
  );
};

export default chat;
