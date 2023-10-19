import React from 'react';

interface HeaderProps {
  text: string;
  checkBg: boolean;
}

const Header: React.FC<HeaderProps> = ({ text, checkBg }) => {
  return checkBg ? (
    <h1 className="py-[3.5rem] text-lg text-black header-bg sm:text-2xl md:py-6 md:text-3xl">
      {text}
    </h1>
  ) : (
    <h1 className="text-sm py-[1rem] font-bold text-center text-black sm:text-2xl md:py-[4rem] md:text-3xl">
      {text}
    </h1>
  );
};

export default Header;
