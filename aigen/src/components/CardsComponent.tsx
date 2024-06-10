import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const CardsComponent: React.FC = () => {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 p-4 lg:p-28">
            <img src={card1} alt="" className="col-span-5 w-full h-auto" />
            <img src={card2} alt="" className="col-span-7 w-full h-auto" />
            <img src={card3} alt="" className="col-span-7 w-full h-auto" />
            <img src={card4} alt="" className="col-span-5 w-full h-auto" />
        </div>
    );
}

export { CardsComponent };
