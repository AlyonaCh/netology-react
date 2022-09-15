import React from 'react';
import { useEffect, useState } from 'react';
function Details(props) {
  const { info } = props
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then(response => response.json())
      .then(data => setUser(() => data))
  }, [info.id]);

    return  (
            
      <div className="">
        {user.id &&
          <div>
            <img src={user.avatar}></img>
            <h3>{user.name}</h3>
            <p>City: {user.details.city}</p>
            <p>Company: {user.details.company}</p>
            <p>Position: {user.details.position}</p>
          </div>
        }
      </div>
      
            
    )
}

export default Details;