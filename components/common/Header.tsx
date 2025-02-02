import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header>
      <h6 className="uppercase text-blue-main text-xl md:text-2xl font-bold">
        {title}
      </h6>
      <h2 className="text-4xl lg:text-6xl font-bold text-gray-700 py-5">
        {subtitle}
      </h2>
    </header>
  );
}

export default Header;
