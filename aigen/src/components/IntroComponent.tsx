import React from 'react';
import introImg from '../assets/IntroImage.png';

const IntroComponent: React.FC = () => {
    return (
        <>
            <div className='relative h-72 lg:h-screen flex items-center justify-center mt-32 mb-16 lg:mt-28 lg:m-44'>
                <div className="absolute inset-0 z-0">
                    <img src={introImg} alt="Introduction Image" className="object-contain w-full h-full" />
                </div>
                <div className="relative z-10 text-center">
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

export { IntroComponent }
