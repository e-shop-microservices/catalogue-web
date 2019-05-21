import React from 'react';
import Product from '../Product'

import './SuggestionItem.css'

const SuggestionItem = ({id, name, price, imagePath}) => {
    return (
        <div className="suggestion-item-wrapper">
            <Product id={id} name={name} price={price} imagePath={imagePath}/>
        </div>
    );
};

export default SuggestionItem;
