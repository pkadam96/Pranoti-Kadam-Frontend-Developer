import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed top-0 w-full bg-black text-white flex items-center gap-8 px-12 py-4 lg:px-24 lg:py-4 border-gradient">
        <h1 className="text-xl font-medium tracking-widest">AI.GEN</h1>
        <div className={`fixed top-12 left-0 w-full h-full bg-black flex gap-4 flex-col items-center justify-center transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex-row lg:justify-between lg:translate-x-0 md:static md:flex-row md:justify-between md:translate-x-0 `}>
          <ul className="flex flex-col lg:flex-row md:flex-row gap-6">
            <li className="text-center"><a href="#features">Features</a></li>
            <li className="text-center"><a href="#roadmap">Roadmap</a></li>
            <li className="text-center"><a href="#tokenomics">Tokenomics</a></li>
          </ul>
          <div className="flex flex-col lg:flex-row md:flex-row gap-3">
            <button className="px-6 pt-3 pb-2.5  sm:px-4 sm:py-3 font-medium rounded bg-white bg-opacity-60 ">Whitepaper</button>
            <button className="px-6 pt-3 pb-2.5 sm:px-4 sm:py-3 font-medium rounded" style={{ background: 'linear-gradient(90deg, #8159b8 0%, #c65dc6 100%)' }}>Get Started</button>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className=" fixed top-5 right-5 mx-2 lg:hidden md:hidden">
          <span className="hamburger-icon px-4 py-3 bg-white bg-opacity-60 rounded-full">{menuOpen ? '✖' : '☰'}</span>
        </button>
      </div>
    </>
  );
}

export { Navbar };



