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
            checkedParameters: this.parseCheckedParameters(searchParameters),
            finishSearch: false
        };

        const filter = {
            searchQuery: searchParameters.searchQuery,
            minPrice: searchParameters.minPrice,
            maxPrice: searchParameters.maxPrice,
            parameters: this.state.checkedParameters
        };

        this.searchProducts(filter);
    }

    parseCheckedParameters(searchParameters) {
        return Object.keys(searchParameters)
            .filter(k => k !== 'searchQuery' && k !== 'minPrice' && k !== 'maxPrice')
            .map(k => ({
                name: k,
                options: Array.isArray(searchParameters[k])
                    ? [...searchParameters[k]]
                    : [searchParameters[k]]
            }));
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
        console.log('Searching...\n', filter);
        CatalogueApi.fullProductSearch(filter)
            .then(searchResult => {
                this.setState({
                    products: searchResult.products,
                    availableParameters: searchResult.availableParameters,
                    checkedParameters: filter.parameters,
                    finishSearch: true
                })
            });

        // TODO: don't forget to output subgroups
        // TODO: don't forget to output subgroups
        // TODO: don't forget to output subgroups
    };

    render() {
        return (
            <div className="product-search-page">
                <span>nav / not / implemented / yet</span>
                <h1 className="product-search-title">
                    {
                        this.state.searchQuery ? "Search - " + this.state.searchQuery : null
                    }
                </h1>
                <div className="product-list-and-filter">
                    <div className="product-filter-wrapper">
                        {
                            this.state.finishSearch
                                ? <ProductFilter availableParameters={this.state.availableParameters}
                                                 checkedParameters={this.state.checkedParameters}
                                                 onChange={this.handleProductFilterChange}/>
                                : <div/>
                        }
                    </div>
                    <div className="product-container-wrapper">
                        <ProductContainer products={this.state.products}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default ProductSearchPage;