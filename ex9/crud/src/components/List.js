import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import ItemsContext from '../contextes/Item'

function Listing() {
  const context = useContext(ItemsContext);

  return  (
          
    <ul>
          {context.items.map(item => (
            <Link key={item.id} to={`/posts/${item.id}`}>
              <li>
                <textarea value={item.content} disabled></textarea>
              </li>
            </Link>
          ))}
        </ul>
    
          
  )
}

export default Listing;