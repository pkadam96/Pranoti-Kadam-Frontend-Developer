import React from 'react';

const keywords = [
    "Technology", "Design", "Artificial Intelligence", "AI Chat Bot", "Customizable",
    "3D Model", "People", "Create Videos", "Analyze", "Outfits", "Voice Chat", "Marketing"
];

const generateRandomGradient = () => {
    const colors = ['#802F7E', '#2B5B75', '#583D80', '#7A464F', 'white'];
    const randomColors = colors.sort(() => 0.5 - Math.random()).slice(0, 2);
    return `linear-gradient(90deg, ${randomColors[0]} 0%, ${colors[4]} 100%)`;
};

const KeywordsCarousal: React.FC = () => {
    const keywordsWithDuplicates = [...keywords, ...keywords];

    return (
        <div className="relative overflow-hidden w-full flex flex-col gap-5 mb-28">
            <div className="flex whitespace-nowrap animate-right-to-left">
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index} className="frosted-glass inline-block px-4 py-2 mx-2 text-white rounded-md" style={{ background: generateRandomGradient()}}>
                        {keyword}
                    </div>
                ))}
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index} className="frosted-glass inline-block px-4 py-2 mx-2 text-white rounded-md" style={{ background: generateRandomGradient()}}>
                    {keyword}
                </div>
                ))}
            </div>
            <div className="flex whitespace-nowrap animate-left-to-right">
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index} className="frosted-glass inline-block px-4 py-2 mx-2 text-white rounded-md" style={{ background: generateRandomGradient()}}>
                        {keyword}
                    </div>
                ))}
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index + keywordsWithDuplicates.length} className="frosted-glass inline-block px-4 py-2 mx-2 text-white rounded-md"style={{ background: generateRandomGradient() }}>
                        {keyword}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { KeywordsCarousal };
