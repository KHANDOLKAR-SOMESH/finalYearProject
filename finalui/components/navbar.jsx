import React from "react";
import Link from "next/link";

const list = [
  { href: "/", link: "home" },
  { href: "about", link: "about" },
  { href: "help", link: "help" },
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
          <span className="self-center text-teal-600 text-2xl font-semibold whitespace-nowrap dark:text-white">
            MEDITECH
          </span>
        </a>

        <ul className="flex gap-3 m-4 text-teal-600">
          {list.map((ele, index) => (
            <li key={index}>
              <a href="ele.href">{ele.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
