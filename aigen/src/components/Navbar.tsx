import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed top-0 w-full text-white flex items-center gap-8 px-12 py-4 lg:px-24 lg:py-4 border-b border-inherit frosted-glass z-30">
        <h1 className="text-xl font-medium tracking-widest">AI.GEN</h1>
        <div className={`fixed top-16 left-0 w-full h-screen-full lg:h-full bg-black flex gap-4 flex-col items-center justify-center transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:bg-transparent lg:flex-row lg:justify-between lg:translate-x-0 md:static md:flex-row md:justify-between md:translate-x-0 z-70 `}>
          <ul className="flex flex-col lg:flex-row md:flex-row gap-6">
            <li className="text-center"><a href="#features">Features</a></li>
            <li className="text-center"><a href="#roadmap">Roadmap</a></li>
            <li className="text-center"><a href="#tokenomics">Tokenomics</a></li>
          </ul>
          <div className="flex flex-col lg:flex-row md:flex-row gap-3">
            <button className="w-36 px-6 pt-3 pb-2.5 sm:px-4 sm:py-3 font-medium rounded frosted-glass">Whitepaper</button>
            <button className="w-36 px-6 pt-3 pb-2.5 sm:px-4 sm:py-3 font-medium rounded bg-gradient-to-r from-[#9E6EE5] to-[#FA75F8]">Get Started</button>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className=" fixed top-5 right-5 mx-2 lg:hidden md:hidden">
          <span className="hamburger-icon px-4 py-3 frosted-glass rounded-full">{menuOpen ? '✖' : '☰'}</span>
        </button>
      </div>
    </>
  );
}

export { Navbar };



