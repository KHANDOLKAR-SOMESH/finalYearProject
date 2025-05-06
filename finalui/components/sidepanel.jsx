'use client'
import React from "react";
import Logo from "./logo";
import SideItem from "./sideItem";
import Usercard from "./usercard";
import Left from "./left";

import { useEffect, useState } from "react";


  
  
  
  
  const Layout = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <div className="  flex h-screen ">
      
      <div className="hidden md:max-w-[25vw] md:w-[25vw] md:h-screen bg-zinc-800 md:grid md:grid-rows-[auto_1fr_auto] md:p-4">
      
        <div className="hiddenflex flex-col gap-2">
          <Logo />
          <SideItem info="chat" icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/chat-4691903-3889544.png?f=webp&w=256" />
          <SideItem info="about" icon="https://cdn.iconscout.com/icon/free/png-256/free-search-icon-download-in-svg-png-gif-file-formats--zoom-logo-find-magnifier-interface-pack-user-icons-1187757.png?f=webp&w=256" />
          <SideItem info="github" icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/faq-1890722-1601028.png?f=webp&w=256" />
          <SideItem info="help" icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/setting-icon-download-in-svg-png-gif-file-formats--gear-settings-cogwheel-cog-user-interface-pack-icons-1651129.png?f=webp&w=256" />
        </div>

    
        <div className="self-end ">
          <Usercard name={username||'user'} />
        </div>
      </div>

      <div className="flex-1 bg-white ">
        <Left /> 
      </div>
    </div>
  );
};

export default Layout;
