import React, { useState } from 'react';
function Toolbar(props) {
    const { filters, selected, onSelectFilter} = props
    const [ select, setFilter ] = useState(selected)

    const chooseFilter = (evt) =>{
        setFilter(evt)
        onSelectFilter(evt)
    }

    return  (
        <nav>
            <ul>
                {filters.map((filter, index) =>
                    <li key={index}>
                        <button className = {filter === select ? 'active' : ''} onClick={() => chooseFilter(filter)}>{filter}</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Toolbar;