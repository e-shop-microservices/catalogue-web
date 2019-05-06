import React from 'react';
import './CategoryBanner.css'

const CategoryBanner = ({imagePath, bannerText}) => {
    return (
        <div className="category-banner-container">
            <img className="banner-image" src={imagePath} alt={bannerText}/>
            <span className="banner-text">{bannerText}</span>
        </div>
    );
};

export default CategoryBanner;