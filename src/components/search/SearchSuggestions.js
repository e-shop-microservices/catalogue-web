import React, {Component} from 'react';
import SuggestionItem from './SuggestionItem'

import './SearchSuggestions.css'


class SearchSuggestions extends Component {
    renderSuggestionItems = (items) => {
        return items.map(product => {
            return (
                <SuggestionItem name={product.name} price={product.price} imagePath={product.imagePath}/>
            )
        })
    };

    render() {
        const {products, totalAmount} = this.props;
        if (products.length <= 0) {
            return (
                <div className="search-suggestions-container">
                    <div className="search-suggestions-footer">
                        <h4>No products found</h4>
                    </div>
                </div>
            )
        }

        return (
            <div className="search-suggestions-container">
                <div className="search-suggestions-items">
                    {this.renderSuggestionItems(products)}
                </div>
                <div className="search-suggestions-footer">
                    <a href="https://google.com" className="search-suggestions-get-more-link">
                        Search for more
                    </a>
                    <span className="search-suggestions-total">
                        Found {totalAmount ? totalAmount : 0} products in total
                    </span>
                </div>
            </div>
        )
    };
}

export default SearchSuggestions;