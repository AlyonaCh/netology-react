import ItemsContext from '../contextes/Item'
import {React, useState, useEffect} from 'react'

export default function ItemsProvider(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems()
    },[items.length]);
    
    
    const loadItems = () => {
        fetch('http://localhost:7777/posts ')
            .then(response => response.json())
            .then(data => setItems(() => data))
    }

    return (
        <ItemsContext.Provider value={{items:items,loadItems:loadItems}}>
            {props.children}
        </ItemsContext.Provider>
    )
    }
    