import React from 'react';
function List(props) {
  const { users, chooseUser, id } = props

  const clickUser = (evt) => {
    chooseUser(evt.target.value)
  }

  return  (
          
    <div className="item-list">
      {users.map((item) =>
        <button className={item.id==id ? 'text-strike' : null} key={item.id} name="user" value={item.id} onClick={clickUser}>{item.name}</button>
      )}
    </div>
    
          
  )
}

export default List;