import React, {Component} from 'react';

import './ColorFilter.css'

class ColorFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'color',
            name: props.name,
            options: props.options
        }
    }

    render() {
        return (
            <div className="color-filter-container">
                {
                    this.state.options.map(c => (
                        <div className="color-filter-element">
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ColorFilter;
