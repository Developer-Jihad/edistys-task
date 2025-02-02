"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Solutions",
    subLinks: [
      { name: "AnyCaaS", href: "/" },
      { name: "AnyBaaS", href: "/" },
      { name: "AnyPaaS", href: "/" },
    ],
  },
  { name: "Services", href: "/" },
  { name: "About Us", href: "/" },
  {
    name: "Languages",
    subLinks: [
      { name: "English", href: "/" },
      { name: "Spanish", href: "/" },
      { name: "French", href: "/" },
    ],
  },
  { name: "Contact Us", href: "/" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-blue-main lg:bg-transparent text-white top-0 lg:absolute w-full">
      <div className="container px-8 py-6 lg:px-20 lg:py-8 relative z-[9999]">
        <div className="flex items-center justify-between">
          <h1>
            <Link aria-label="Go to home page" href="/">
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format"
                width={200}
                height={32}
                className="w-[134px] lg:w-[170px]"
                alt="AnyTech"
              />
            </Link>
          </h1>

          <div className="flex items-center">
            <nav
              className="hidden lg:block"
              aria-label="Main navigation desktop"
            >
              <ul className="flex space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index} className="relative group text-lg">
                    {link.subLinks ? (
                      <>
                        <span className="flex items-center cursor-pointer mb-3">
                          {link.name}
                          <svg
                            className="ml-2 mt-1 fill-white"
                            width="9"
                            height="6"
                            viewBox="0 0 9 6"
                          >
                            <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                          </svg>
                        </span>
                        <ul className="absolute left-0 bg-white shadow-lg rounded hidden group-hover:block">
                          {link.subLinks.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subLink.href}
                                className="block py-3 px-5 hover:bg-blue-200 hover:text-red-500 text-black"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={link.href}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <button onClick={toggleMenu} className="lg:hidden ml-4">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <nav
          ref={menuRef}
          className={`flex justify-center items-start absolute top-20 left-0 pt-10 mx-auto w-full h-fit pb-14 rounded-lg bg-blue-500 py-8 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <ul className="flex flex-col space-y-8 pl-4">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group text-lg">
                {link.subLinks ? (
                  <>
                    <span className="flex items-center cursor-pointer mb-3">
                      {link.name}
                      <svg
                        className="ml-2 mt-1 fill-white"
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                      >
                        <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                      </svg>
                    </span>
                    <ul className="relative left-0 bg-white shadow-lg rounded hidden group-hover:block">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subLink.href}
                            className="block py-3 px-5 hover:bg-blue-200 hover:text-red-500 text-black"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={link.href}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
