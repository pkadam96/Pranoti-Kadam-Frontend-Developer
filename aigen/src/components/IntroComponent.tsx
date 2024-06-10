import React, { useState, useEffect } from 'react';
import introImg from '../assets/IntroImage.png';

const IntroComponent: React.FC = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        let timer: number;
        const handleScroll = () => {
            setScrolling(true);
            clearTimeout(timer);
            timer = window.setTimeout(() => {
                setScrolling(false);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>           
            <div className={`relative intro-container h-72 lg:h-screen flex items-center justify-center mt-32 mb-16 lg:mt-28 lg:m-44 ${scrolling ? 'animate-breathing' : ''}`}>
                <div className="absolute inset-0 z-0">
                    <img src={introImg} alt="Introduction Image" className={`object-contain w-full h-full intro-container ${scrolling ? 'animate-breathing' : ''}`} />
                </div>
                <div className={`relative z-10 text-center intro-container ${scrolling ? 'animate-breathing' : ''}`}>
                    <h1 className='text-md lg:text-5xl lg:font-medium lg:leading-12'>
                        <span className='bg-gradient-to-r from-[#FACC69] to-[#FF91A5] bg-clip-text text-transparent'>
                            Create, customize, and publish </span> 
                         your <br /> digital persona to life effortlessly.
                    </h1>
                </div>
            </div>
        </>
    );
}

export { IntroComponent };
