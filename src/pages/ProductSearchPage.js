import React, {Component} from 'react';
import queryString from 'query-string'

import './ProductSearchPage.css'
import ProductFilter from "../components/accordion-filter/ProductFilter";
import ProductContainer from "../components/ProductContainer";
import CatalogueApi from '../api/catalogue'

class ProductSearchPage extends Component {
    constructor(props) {
        super(props);
        const searchParameters = queryString.parse(props.location.search);
        this.state = {
            searchQuery: searchParameters.searchQuery,
            searchTimeout: null,
            products: [],
            availableParameters: [],
            checkedParameters: Object.keys(searchParameters)
                .filter(k => k !== 'searchQuery' && k !== 'minPrice' && k !== 'maxPrice')
                .map(k => ({
                    name: k,
                    options: [...searchParameters[k]]
                }))
        };

        const filter = {
            searchQuery: searchParameters.searchQuery,
            minPrice: searchParameters.minPrice,
            maxPrice: searchParameters.maxPrice,
            parameters: this.state.checkedParameters
        };

        this.searchProducts(filter);
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

        // TODO: don't forget to output subgroups
        // TODO: don't forget to output subgroups
        // TODO: don't forget to output subgroups

        this.setState({
            products: searchResult.products,
            availableParameters: searchResult.availableParameters
        })
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