import React, {Component} from 'react';
import {Checkbox} from 'pretty-checkbox-react';

import './OptionsFilter.scss'

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
            <div className="options-filter-container">
                {
                    this.state.options.map(option =>
                        <div className="options-filter-checkbox-wrapper">
                            <Checkbox style="thick" animation="smooth" color="danger-o">
                                {option}
                            </Checkbox>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default OptionsFilter;
