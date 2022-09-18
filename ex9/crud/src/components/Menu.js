import React from 'react';
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
function Menu() {
    return  (
      <nav className="menu">
        <NavLink className={({ isActive }) => (isActive ? 'menu__item menu__item-active': 'menu__item')} to="/posts/new">Создать пост</NavLink>
      </nav>
    )
}


export default Menu;