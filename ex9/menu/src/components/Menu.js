import React from 'react';
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
function Menu() {
    return  (
      <nav className="menu">
        <NavLink className={({ isActive }) => (isActive ? 'menu__item menu__item-active': 'menu__item')} to="/main">Главная</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu__item menu__item-active': 'menu__item')} to="/drift">Дрифт-Такси</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu__item menu__item-active': 'menu__item')} to="/timeattack">Time Attack</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu__item menu__item-active': 'menu__item')} to="/forza">Forza Karting</NavLink>
      </nav>
    )
}


export default Menu;