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
        searchResult: {
            products: [],
            totalAmount: 0
        },
        showSearchSuggestions: false
    };

    handleSearchQueryChange = (event) => {
        clearTimeout(this.state.searchTimeoutId);
        this.setState({
            searchQuery: event.target.value
        }, () => {
            if (this.state.searchQuery.length >= this.state.searchQueryMinLength) {
                this.setState({
                    searchTimeoutId: setTimeout(this.requestSearchSuggestions, 1000)
                });
            } else {
                this.setState({
                    showSearchSuggestions: false
                })
            }
        });
    };

    requestSearchSuggestions = () => {
        let searchResult = {
            products: [
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
                },
                {
                    id: '3',
                    name: 'product3',
                    price: '350',
                    imagePath: '/product.jpg'
                },
                {
                    id: '3',
                    name: 'product3',
                    price: '350',
                    imagePath: '/product.jpg'
                }
            ],
            totalAmount: 364
        };

        if (this.state.searchQuery === 'none') {
            searchResult.products = [];
            searchResult.totalAmount = 0;
        }
        this.setState({
            searchResult: searchResult,
            showSearchSuggestions: true
        });
    };

    handleOverlayOnClick = () => {
        this.setState({
            showSearchSuggestions: false
        });
    };

    render() {
        return (
            <div className="search-form-container">
                <form action="#" className="search-form">
                    <input type="text" className="search-input"
                           placeholder="Find equipment and clothes"
                           value={this.state.searchQuery}
                           onChange={this.handleSearchQueryChange}/>
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                </form>
                {
                    this.state.showSearchSuggestions
                        ? <SearchSuggestions products={this.state.searchResult.products}
                                             totalAmount={this.state.searchResult.totalAmount}/>
                        : null
                }
                {
                    this.state.showSearchSuggestions
                        ? <div className="overlay" onClick={this.handleOverlayOnClick}/>
                        : null
                }
            </div>
        );
    }
}

export default ProductSearch;