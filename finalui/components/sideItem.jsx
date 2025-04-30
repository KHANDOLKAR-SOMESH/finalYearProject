import React from "react";

const sideItem = ({info,icon}) => {
  return (
    <div>
      <div className="w-72 h-6 bg-transparent my-2 text-center text-white flex items-center justify-start rounded-r-md">
            <span className="my-3 mx-4 "><img src={icon} alt="image" style={{'height':'25px'}} /></span><span>{info}</span>
      </div>
    </div>
  );
};

export default sideItem;
