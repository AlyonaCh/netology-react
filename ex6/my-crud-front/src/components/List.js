import React from 'react';
function Listing(props) {
  const { items, delNote } = props

    return  (
            
      <ul>
            {items.map(item => (
              <li key={item.id}>
                <textarea value={item.body} disabled></textarea>
                <input type="submit" id={item.id} onClick={delNote} value="✘"/>
              </li>
            ))}
          </ul>
      
            
    )
}

export default Listing;