import React from 'react';
import Collapsible from 'react-collapsible';
import PriceFilterElement from './PriceFilterElement'
import OptionsFilterElement from './OptionsFilterElement'

import './FilterElement.css'

const FilterElement = (props) => {
    const renderTrigger = (isOpen) => {
        const headerClasses = isOpen
            ? "filter-element-trigger-text trigger-open"
            : "filter-element-trigger-text trigger-close";
        return (
            <div className="filter-element-trigger">
                <h1 className={headerClasses}>{props.name}</h1>
            </div>
        );
    };

    return (
        <div className="filter-element-container">
            <Collapsible triggerTagName="div"
                         trigger={renderTrigger(false)}
                         triggerWhenOpen={renderTrigger(true)}
                         open={props.open}
                         transitionTime={250}
                         easing="ease-out"
                         key={props.name}>
                {
                    props.name === 'price'
                        ? <PriceFilterElement name={props.name}
                                              minPrice={props.minPrice}
                                              maxPrice={props.maxPrice}
                                              changeCallback={props.changeCallback}/>
                        : <OptionsFilterElement name={props.name}
                                                options={props.options}
                                                changeCallback={props.changeCallback}/>
                }
            </Collapsible>
        </div>
    );
};

export default FilterElement;
