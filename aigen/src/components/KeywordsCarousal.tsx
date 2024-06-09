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
        <div className="keywords-carousal-container">
            <div className="carousal right-to-left">
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index} className="keyword frosted-glass" style={{ background: generateRandomGradient() }}>
                        {keyword}
                    </div>
                ))}
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index} className="keyword frosted-glass" style={{ background: generateRandomGradient() }}>
                    {keyword}
                </div>
                ))}
            </div>
            <div className="carousal left-to-right">
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index} className="keyword frosted-glass" style={{ background: generateRandomGradient() }}>
                        {keyword}
                    </div>
                ))}
                {keywordsWithDuplicates.map((keyword, index) => (
                    <div key={index + keywordsWithDuplicates.length} className="keyword frosted-glass" style={{ background: generateRandomGradient() }}>
                        {keyword}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { KeywordsCarousal };
