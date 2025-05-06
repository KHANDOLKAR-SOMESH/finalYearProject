import React from "react";
import Link from "next/link";

const list = [
  { href: "/", link: "home" },
  { href: "/login", link: "login" },
  { href: "/register", link: "register" },
  { href: "contact", link: "contact us" },
];

const navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700">
      <div className="flex  text-white justify-between">
        <a
          href=""
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-center text-teal-600 text-xs md:text-2xl font-semibold whitespace-nowrap dark:text-white">
            MEDITECH
          </span>
        </a>

        <ul className="flex items-center gap-1 m-2 md:gap-3 md:m-4 text-white">
          {list.map((ele, index) => (
            <li key={index}>
              <Link href={ele.href}>{ele.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
