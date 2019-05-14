import React from 'react';

import './index.css'
import ProductFilter from "../../components/accordion-filter/ProductFilter";

const ProductSearchPage = ({searchRequest}) => {
    let parameters = [
        {
            id: 'price',
            name: 'Price',
            min: 100,
            max: 1500
        },
        {
            id: 'color',
            name: 'Color',
            options: [
                'red',
                'green',
                'blue'
            ]
        },
        {
            id: 'manufacturer',
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
            <h1 className="product-search-title">
                {
                    searchRequest.searchQuery ? "Search - " + searchRequest.searchQuery : null
                }
            </h1>
            <ProductFilter parameters={parameters}/>
        </div>
    );
};

export default ProductSearchPage;