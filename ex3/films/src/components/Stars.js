import React from 'react';
import Star from './Star'
function Stars() {
    const stars = [{id:0,count:1},{id:1,count:5},{id:2,count:3},{id:3},]

    return  (
        <div>
          <ul class="card-body-stars u-clearfix">
            {stars.map((item) =>
              (item.count >= 1 && item.count <= 5) && <Star key={item.id}/>     
            )}
          </ul>
        </div>
    )
}

export default Stars;