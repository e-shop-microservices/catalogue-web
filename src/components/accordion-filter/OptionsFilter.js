import React, {Component} from 'react';

import './OptionsFilter.css'

class OptionsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            options: props.options
        }
    }

    render() {
        return (
            <div>
                <h1>OPTIONS</h1>
            </div>
        );
    }
}

export default OptionsFilter;
