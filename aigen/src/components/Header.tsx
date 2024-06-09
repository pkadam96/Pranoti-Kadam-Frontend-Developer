import React from 'react';
import img1 from '../assets/ColumnImage1.png';
import img2 from '../assets/ColumnImage2.png';
import img3 from '../assets/ColumnImage3.png';
import { Navbar } from './Navbar';


const Header: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className='flex h-full gap-24'>
                <div className='flex justify-center items-center ml-48'>
                    <div>
                        <p className='px-2 py-0.5 rounded-lg frosted-glass inline-block mb-16 mt-28'>🎉New in AI.GEN: Real Time Interaction</p>
                        <h1 className='text-5xl font-medium leading-12' style={{color:"#e9e8e9"}}>IOTA polygon serum ipsum <br /> <span style={{color:"#a39faa"}}>WAX terraUSD gala THETA.</span></h1>
                        <h2 className='leading-10 text-2xl my-8' >Chiliz serum TRON dash aave cardano crypto celo. Golem <br />ankr bancor horizen ethereum quant bitcoin.</h2>
                        <button className="w-48 h-16 text-2xl px-6 pt-3 pb-2.5 sm:px-4 sm:py-3 font-medium rounded-lg my-4" style={{ background: 'linear-gradient(45deg, #9E6EE5 0%, #FA75F8 100%)' }}>Get Started</button>
                    </div>
                </div>
                <div className='flex self-end'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </>
    )
}
export { Header }