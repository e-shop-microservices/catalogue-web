import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faSearch} from "@fortawesome/free-solid-svg-icons/index";
import SearchSuggestions from './SearchSuggestions'

import './ProductSearch.css'

class ProductSearch extends Component {
    state = {
        searchQuery: '',
        searchQueryMinLength: 3,
        searchTimeoutId: null,
        searchResult: []
    };

    handleSearchQueryChange = (event) => {
        clearTimeout(this.state.searchTimeoutId);
        this.setState({
                searchQuery: event.target.value
            },
            () => {
                if (this.state.searchQuery.length >= this.state.searchQueryMinLength) {
                    this.setState({
                        searchTimeoutId: setTimeout(this.requestSearchSuggestions, 1000)
                    });
                } else {
                    this.setState({
                        searchResults: []
                    })
                }
            });
    };

    requestSearchSuggestions = (searchQuery) => {
        let products = [
            {
                id: '1',
                name: 'product1',
                price: '240',
                imagePath: '/product.jpg'
            },
            {
                id: '2',
                name: 'product2',
                price: '540',
                imagePath: '/product.jpg'
            },
            {
                id: '3',
                name: 'product3',
                price: '350',
                imagePath: '/product.jpg'
            }
        ];
        this.setState({
            searchResult: products
        });
        console.log(">> SEARCHING PRODUCTS");
    };

    render() {
        return (
            <div className="search-form-container">
                <form action="#" className="search-form">
                    <input type="text" className="search-input" placeholder="Find equipment and clothes"
                           value={this.state.searchQuery}
                           onChange={this.handleSearchQueryChange}/>
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                </form>
                <SearchSuggestions products={this.state.searchResult}/>
            </div>
        );
    }
}

export default ProductSearch;