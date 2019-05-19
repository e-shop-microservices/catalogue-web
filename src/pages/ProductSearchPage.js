import React, {Component} from 'react';

import './ProductSearchPage.css'
import ProductFilter from "../components/accordion-filter/ProductFilter";
import ProductContainer from "../components/ProductContainer";

class ProductSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: props.searchQuery,
            availableParameters: [
                {
                    name: 'color2',
                    options: [
                        'red',
                        'green',
                        'blue',
                        'blue2'
                    ]
                },
                {
                    name: 'color',
                    options: [
                        'red',
                        'green',
                        'blue',
                    ]
                },
                {
                    name: 'manufacturer',
                    options: [
                        'Manufacturer1',
                        'Manufacturer2',
                        'Manufacturer3'
                    ]
                }
            ],
            filterParameters: [
                {
                    name: 'manufacturer',
                    value: 'Manufacturer2'
                }
            ],
            checkedParameters: [
                {
                    name: 'color',
                    options: [
                        'red'
                    ]
                },
                {
                    name: 'manufacturer',
                    options: [
                        'Manufacturer1',
                        'Manufacturer2',
                    ]
                }
            ]
        }
    }

    handleProductFilterChange = (filter) => {
        // TODO: implement search
        // wait one second and start search
    };

    render() {
        return (
            <div className="product-search-page">
                <span>Nav / not / implemented / yet</span>
                <h1 className="product-search-title">
                    {
                        this.state.searchQuery ? "Search - " + this.state.searchQuery : null
                    }
                </h1>
                <div className="product-list-and-filter">
                    <div className="product-filter-wrapper">
                        <ProductFilter availableParameters={this.state.availableParameters}
                                       checkedParameters={this.state.checkedParameters}
                                       onChange={this.handleProductFilterChange}/>
                    </div>
                    <div className="product-container-wrapper">
                        <ProductContainer/>
                    </div>
                </div>
            </div>
        );
    };
}

export default ProductSearchPage;