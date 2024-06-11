import React, { useEffect } from 'react';
import img1 from '../assets/ColumnImage1.png';
import img2 from '../assets/ColumnImage2.png';
import img3 from '../assets/ColumnImage3.png';
import { Navbar } from './Navbar';

const Header: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elementIds = ['img1', 'img2', 'img3', 'img4'];
    
            elementIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const scrollPosition = window.scrollY;
                    element.style.transform = `translateY(-${scrollPosition * 1}px)`;
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <>
            <Navbar />  
              <div className={`relative top-16 lg:top-0 w-full h-screen-100 lg:h-screen flex lg:flex-row gap-6 lg:gap-24  z-20 bg1`}>
                <div className='absolute inset-0 lg:relative flex  lg:hidden'>
                    <div className='flex w-full'>
                        <img id='img1' src={img1} className=' w-1/3'/>
                        <img src={img2} className='w-1/3'/>
                        <img id='img3' src={img3} className=' w-1/3'/>
                    </div>
                </div>              
                <div className='flex justify-center items-center lg:pt-0 lg:ml-40 z-10 lg:z-auto bg-opacity-50 lg:bg-opacity-0 bg-black lg:bg-transparent'>
                    <div className='text-center lg:text-left p-6 lg:p-0'>
                        <p className='px-2 py-0.5 rounded-lg frosted-glass inline-block mb-8 text-sm lg:text-lg lg:mb-16 lg:mt-28'>🎉New in AI.GEN: Real Time Interaction</p>
                        <h1 className='text-2xl lg:text-5xl font-medium leading-8 lg:leading-12' style={{ color: "#e9e8e9" }}>IOTA polygon serum ipsum <br /> <span style={{ color: "#a39faa" }}>WAX terraUSD gala THETA.</span></h1>
                        <h2 className='leading-6 lg:leading-10 text-sm lg:text-2xl my-4 lg:my-8'>Chiliz serum TRON dash aave cardano crypto celo. Golem <br />ankr bancor horizen ethereum quant bitcoin.</h2>
                        <button className="w-32 lg:w-48 h-12 lg:h-16 text-sm lg:text-2xl px-4 lg:px-6 pt-2 lg:pt-3 pb-1.5 lg:pb-2.5 font-medium rounded-lg my-4 bg-gradient-to-r from-[#9E6EE5] to-[#FA75F8]" >Get Started</button>
                    </div>
                </div>
                <div className='hidden lg:flex lg:self-end lg:relative lg:z-0 lg:ml-auto'>
                    <img id='img2' src={img1} alt="" className='img1 w-full h-auto opacity-50 lg:opacity-100' />
                    <img src={img2} alt="" className='w-full h-auto opacity-50 lg:opacity-100' />
                    <img id='img4' src={img3} alt="" className='img3w-full h-auto opacity-50 lg:opacity-100' />
                </div>
            </div>
        </>
    );
}

export { Header };
