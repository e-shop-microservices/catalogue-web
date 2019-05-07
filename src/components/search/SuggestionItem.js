import React from 'react';
import Product from '../Product'

import './SuggestionItem.css'

const SuggestionItem = ({name, price, imagePath}) => {
    return (
        <div className="suggestion-item-wrapper">
            <Product name={name} price={price} imagePath={imagePath}/>
        </div>
    );
};

export default SuggestionItem;
