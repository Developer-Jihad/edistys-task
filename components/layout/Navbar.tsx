"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Solutions",
    subLinks: [
      { name: "Hero", href: "#hero" },
      { name: "Finance", href: "#finance" },
      { name: "Philosophy", href: "#philosophy" },
    ],
  },
  { name: "Technology", href: "#technology" },
  { name: "Trusts", href: "#trusts" },
  {
    name: "Languages",
    subLinks: [
      { name: "English", href: "/#" },
      { name: "Spanish", href: "/##" },
      { name: "French", href: "/###" },
    ],
  },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkHero, setIsDarkHero] = useState(true);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
      setIsDarkHero(currentScrollY < 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <header className={`sticky lg:fixed text-white opacity-90 top-0 w-full z-[9999] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isDarkHero ? 'bg-blue-main lg:bg-transparent' : 'bg-blue-main'}`}>
      <div className="container px-8 py-6 lg:px-20 relative">
        <div className="flex items-center justify-between">
          
            <Link aria-label="Go to home page" href="#hero">
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format"
                width={200}
                height={32}
                className="w-[134px] lg:w-[150px]"
                alt="AnyTech"
              />
            </Link>
          

          <div className="flex items-center">
            <nav
              className="hidden lg:block"
              aria-label="Main navigation desktop"
            >
              <ul className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index} className="relative group text-lg">
                    {link.subLinks ? (
                      <>
                        <span className="flex items-center cursor-pointer">
                          {link.name}
                          <svg
                            className="ml-2 fill-white"
                            width="9"
                            height="6"
                            viewBox="0 0 9 6"
                          >
                            <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                          </svg>
                        </span>
                        <div className="absolute left-0 w-[170px] py-2 invisible group-hover:visible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-95">
                        <ul className=" bg-white shadow-lg rounded-lg p-2 space-y-1">
                          {link.subLinks.map((subLink, subIndex) => {
                            const isActive = pathname === subLink.href;
                            return (
                              <li key={subIndex}>
                                <Link
                                  href={subLink.href}
                                  className={`block py-2 px-3 hover:bg-blue-100 hover:text-blue-main text-black rounded-lg ${
                                    isActive
                                      ? "bg-blue-100 text-blue-main"
                                      : ""
                                  }`}
                                >
                                  {subLink.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={
                          link.name === "Contact Us"
                            ? "text-white font-bold border-2 rounded-lg px-10 py-3 hover:bg-orange-main transition-all duration-300"
                            : "text-gray-100 inline-block transition-all duration-300"
                        }
                      >
                        {link.name}
                        <span
                          className={
                            link.name !== "Contact Us"
                              ? "absolute left-0 -bottom-2 h-1 rounded-full w-full bg-gray-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"
                              : ""
                          }
                        ></span>
                      </Link>
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

        {/* // Navigation for Small Devices ======================================================== */}

        <nav
          ref={menuRef}
          className={`flex absolute top-[75px] left-0 pt-10 mx-auto w-full h-fit pb-14 rounded-lg bg-blue-main opacity-90 py-8 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <ul className="flex flex-col space-y-8 pl-8">
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
                    <ul className="absolute group-hover:relative w-[200px] left-0 bg-white shadow-lg rounded-lg transition-opacity duration-700 ease-in-out opacity-0 invisible group-hover:visible group-hover:opacity-95 ">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subLink.href}
                            className="block py-3 pl-7 hover:bg-blue-100 hover:text-blue-main text-black rounded-lg"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={
                      link.name === "Contact Us"
                        ? "text-gray-100 font-bold border-2 inline-block inline-flex justify-center w-full rounded-lg px-10 py-3 hover:bg-gray-100 hover:text-blue-main transition-all duration-300"
                        : "text-gray-100 relative inline-block transition-all duration-300"
                    }
                  >
                    {link.name}
                    <span
                      className={
                        link.name !== "Contact Us"
                          ? "absolute left-0 -bottom-2 h-1 rounded-full w-full bg-gray-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"
                          : ""
                      }
                    ></span>
                  </Link>
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
