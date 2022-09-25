import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    selectPhotos
  } from '../reducers/photoSlice';

function PhotoList() {
    const items = useSelector(selectPhotos);

    return (
        <div className="photos">
            { items[items.length-1] &&
                <img src={items[items.length-1].src} width="189" height="255"></img>
            }
            
            <ul>
                {items.map((o, index, array) => 
                    <div key={o.id}>
                        { index !== array.length-1 &&
                            <li>
                                <img src={o.src} width="200" height="200"></img>
                            </li>
                        }
                    </div>
                )}
            </ul>
        </div>
    )
}


export default PhotoList;
