import React from 'react';

const FilterNav = (props) => (
    <div>
        <div className="dropdown">
            <button className="btn filterPost dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={props.filterAllClick}>All Posts</a>
                <a className="dropdown-item" onClick={props.filterCohortClick}>GTATL201901</a>
            </div>
        </div>
    </div>
)

export default FilterNav;