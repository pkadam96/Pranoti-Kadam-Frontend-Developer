import React, { useEffect, useState } from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const CardsComponent: React.FC = () => {
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
        <div className={`grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 p-4 lg:p-28 ${scrolling ? 'animate-breathing' : ''}`}>
            <img src={card1} alt="" className="col-span-5 w-full h-auto" />
            <img src={card2} alt="" className="col-span-7 w-full h-auto" />
            <img src={card3} alt="" className="col-span-7 w-full h-auto" />
            <img src={card4} alt="" className="col-span-5 w-full h-auto" />
        </div>
    );
}

export { CardsComponent };
