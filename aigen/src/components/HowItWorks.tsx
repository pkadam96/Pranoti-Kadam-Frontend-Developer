import React, { useState, useEffect } from 'react';
import Avatar from '../assets/Avatar.png';

const HowItWorks: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4); 
        }, 1500);

        return () => clearInterval(interval);
    }, []);

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
            <div className={`relative intro-container flex flex-col lg:flex-row items-center gap-12 mb-24 lg:mb-36 ${scrolling ? 'animate-breathing' : ''}`}>
                <div className="breathing">
                    <img src={Avatar} alt="Avatar Image" className='p-4'/>
                </div>
                <div className="breathing">
                    <h1 className='text-4xl lg:font-semibold lg:text-6xl lg:leading-13 mb-8'>How it Works</h1>
                    <ul className="list-none p-0 m-0">
                        {["Select An Avatar", "Create or Generate Script", "Create AI Voices", "Publish"].map((item, index) => (
                            <li key={index} className='mb-2 lg:mb-4'>
                                <span className={`text-3xl lg:text-5xl mr-2 ${activeIndex === index ? 'bg-gradient-to-r from-[#5CC3FA] to-[#9E6EE6] bg-clip-text text-transparent' : 'text-gray-400'}`}>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export { HowItWorks };
