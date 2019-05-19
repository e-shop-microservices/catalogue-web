import React, {Component} from 'react';

import './ProductSearchPage.css'
import ProductFilter from "../components/accordion-filter/ProductFilter";
import ProductContainer from "../components/ProductContainer";
import CatalogueApi from '../api/catalogue'

class ProductSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: props.searchQuery,
            searchTimeout: null,
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
        clearTimeout(this.state.searchTimeoutId);
        this.setState({
            searchTimeoutId: setTimeout(() => {
                this.searchProducts(filter)
            }, 1000)
        });
    };

    searchProducts = (filter) => {
        let searchRequest = {
            searchQuery: this.state.searchQuery,
            minPrice: filter.minPrice,
            maxPrice: filter.maxPrice,
            parameters: filter.parameters
                .map(parameter => ({
                    name: parameter.name,
                    options: parameter.options.filter(option => option.checked)
                }))
                .filter(parameter => parameter.options.length > 0)
                .map(parameter => ({
                    name: parameter.name,
                    options: parameter.options.map(option => option.name)
                }))
        };

        let searchResult = CatalogueApi.fullProductSearch(searchRequest);

        // TODO: parse searchResult
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