import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900  py-10">
      <div className="container text-center text-white ">
        <div>
          <div className="text-gray-300 text-base md:text-base px-4 py-3 sm:p-0">
            <p className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400">
                Looking for a Reliable Working Partner?
              </span>
            </p>
            <p className="leading-8 mt-2">
              I&apos;m a professional{" "}
              <span className="text-purple-400"> Front-End Web Developer </span>{" "}
              and experienced
              <span className="text-purple-400"> Graphic Designer. </span>
              Let&apos;s work together to create Impactful Solutions!
            </p>
          </div>
          <div className="mt-5 lg:mt-7">
            <Link
              className="px-10 lg:px-20 text-sm py-3 mx-10 rounded-full border border-purple-400 hover:bg-purple-700"
              href="https://jihad-info.vercel.app/"
            >
              🧑🏻‍💻 Visit My Protfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
