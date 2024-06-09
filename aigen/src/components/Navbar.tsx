
const Navbar: React.FC = () => {

  return (
    <>
      <div className="w-full bg-black text-white flex items-center gap-8 px-24 py-4 border-gradient">
        <h1 className="text-xl font-medium tracking-widest">AI.GEN</h1>
        <div className="w-full flex  items-center justify-between">
          <ul className="flex gap-6">
            <li><a href="#features">Features</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
          </ul>
          <div>
            <div className="flex gap-3">
              <button className="px-6 pt-3 pb-2.5 font-medium rounded bg-white bg-opacity-60 ">Whitepaper</button>
              <button className="px-6 pt-3 pb-2.5 font-medium rounded" style={{ background: 'linear-gradient(90deg, #8159b8 0%, #c65dc6 100%)' }}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Navbar };



