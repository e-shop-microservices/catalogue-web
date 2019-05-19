import React from 'react';

import './ProductSearchPage.css'
import ProductFilter from "../components/accordion-filter/ProductFilter";
import ProductContainer from "../components/ProductContainer";

const ProductSearchPage = ({searchQuery}) => {
    let parameters = [
        {
            name: 'price',
            min: 100,
            max: 1500
        },
        {
            name: 'Color2',
            options: [
                'red',
                'green',
                'red',
                'green',
                'blue',
                'green',
                'blue'
            ]
        },
        {
            name: 'Color',
            options: [
                'red',
                'green',
                'red',
                'green',
                'blue',
                'green',
                'blue'
            ]
        },
        {
            name: 'Manufacturer',
            options: [
                'Manufacturer 1',
                'Manufacturer 2',
                'Manufacturer 3'
            ]
        }
    ];

    return (
        <div className="product-search-container">
            <span>Nav / not / implemented / yet</span>
            <h1 className="product-search-title">
                {
                    searchQuery ? "Search - " + searchQuery : null
                }
            </h1>
            <div className="product-filter-wrapper">
                <ProductFilter parameters={parameters}/>
            </div>
            <div className="product-container-wrapper">
                <ProductContainer/>
            </div>
        </div>
    );
};

export default ProductSearchPage;