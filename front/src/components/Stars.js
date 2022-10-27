import React from 'react'

export const Stars = ({star}) => {
    const maxStars = 5;
    const starPercentage = (star / maxStars) * 100;
    const starPercentageRounded = Math.round(starPercentage);

    const styleStar = () => {
        return {
            width: starPercentageRounded + "%",
        };
    };

    return (
        <div className="stars-gray">
            <div className="stars-yellow" style={styleStar()}>
            </div>
        </div>
    );
}
