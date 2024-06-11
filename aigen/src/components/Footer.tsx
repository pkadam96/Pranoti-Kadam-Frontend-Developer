import React, { useEffect, useRef, useState } from 'react';
import FooterImg from "../assets/footerImg.png";

const useOnScreen = (ref: React.RefObject<HTMLDivElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { rootMargin: '0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
};

const Footer: React.FC = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(componentRef);

    return (
        <>
            <div className='relative flex mt-0'>
                <div className="absolute inset-0 z-0">
                    <img
                        src={FooterImg}
                        alt="Introduction Image"
                        className={`object-contain lg:w-full h-full ${isVisible ? 'animate-bottom-to-top' : ''}`}
                    />
                </div>
                <div ref={componentRef} className={`z-10 lg:p-20 mt-16 lg:mt-56 mx-4 w-full ${isVisible ? 'visible' : ''}`}>
                    <button className="w-full px-4 py-4 lg:px-16 lg:py-10 lg:text-6xl rounded-md lg:rounded-lg text-left bg-gradient-to-r from-[#9E6EE5] to-[#FA75F8] flex justify-between items-center">
                        <span>Get Started</span>
                        <i className="fa-solid fa-arrow-right fa-lg"></i>
                    </button>
                </div>
            </div>
            <div className='mx-4 lg:mx-24 my-8'>
                <div className='flex flex-col lg:flex-row justify-between items-center my-16 lg:my-36'>
                    <p className='text-xl lg:text-3xl lg:w-2/5'>Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.</p>
                    <div className='lg:text-2xl mt-8'>
                        <p className='text-right'>Looking for help?</p>

                        <input type="text" name="" id="" placeholder='Enter your Email' className='w-56 lg:w-72 px-4 py-3 lg:px-8 lg:py-4 bg-transparent rounded-lg border-1 border-gray mr-1' />
                        
                        <button className='lg:w-32 h-12 lg:h-16 text-sm lg:text-2xl px-8 lg:px-6 pt-2 lg:pt-3 pb-1.5 lg:pb-2.5 font-medium rounded-lg my-4 bg-gradient-to-r from-[#9E6EE5] to-[#FA75F8]'>Submit</button>
                    </div>
                </div>
                <div className='flex justify-between border-t-1 py-4 lg:py-12'>
                    <h1 className="text-sm lg:text-xl font-medium tracking-widest">AI.GEN</h1>
                    <div>
                        <i className="fa-brands fa-twitter lg:fa-xl ml-4 lg:ml-12"></i>
                        <i className="fa-brands fa-linkedin-in lg:fa-xl ml-4 lg:ml-12"></i>
                        <i className="fa-brands fa-tiktok lg:fa-xl ml-4 lg:ml-12"></i>
                        <i className="fa-brands fa-youtube lg:fa-xl ml-4 lg:ml-12"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Footer }
