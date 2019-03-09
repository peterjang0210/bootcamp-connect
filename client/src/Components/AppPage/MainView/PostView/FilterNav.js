import React from 'react';

const FilterNav = (props) => (
    <div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={props.filterClick}>GT2019FT</a>
            </div>
        </div>
    </div>
)

export default FilterNav;