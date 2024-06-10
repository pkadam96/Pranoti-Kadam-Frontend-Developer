import React, { useState, useEffect, useRef } from 'react';

interface PhaseComponentProps {
    title: string;
    points: string[];
    image: string;
}

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

const PhaseComponent: React.FC<PhaseComponentProps> = ({ title, points, image }) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(componentRef);

    return (
        <div ref={componentRef} className={`flex flex-col md:flex-row items-center p-4 gap-8 lg:gap-28 mb-16 lg:mb-24 ${isVisible ? 'visible' : ''}`}>
            <div className="flex-1">
                <h1 className="bg-gradient-to-r from-[#FACC69] to-[#FA75F8] bg-clip-text text-transparent text-3xl lg:text-5xl font-medium mb-4">{title}</h1>
                <ul className="list-disc list-inside">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start mb-2">
                            <span className="flex-shrink-0 w-1 h-1 bg-current rounded-full mt-2 mr-2"></span>
                            <span className="text-xl">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <img
                src={image}
                alt={title}
                className={`flex-1 w-full md:w-auto h-auto ${isVisible ? 'animate-slide-in-right' : ''}`}
            />
        </div>
    );
}

export { PhaseComponent };
