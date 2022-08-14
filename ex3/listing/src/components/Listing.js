import React from 'react';
import Item from './Item'
function Listing(props) {
  const { items } = props

    return  (
            
      <div className="item-list">
        {items.map((item) =>
          <Item key={item.listing_id} item={item} />
        )}
      </div>
      
            
    )
}

export default Listing;