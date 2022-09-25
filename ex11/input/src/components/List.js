import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    selectNumber
  } from '../reducers/formSlice';

function List() {
    const number = useSelector(selectNumber);
    const items = [
        {id:0,text:'Прообразом Чубакки стал пес режиссера'},
        {id:1,text:'Актерам разрешили подобрать любимый цвет для своих световых мечей.'},
        {id:2,text:'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.'},
        {id:3,text:'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.'},
        {id:4,text:'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок'},
    ]

    return (
        <ul>
            {items.map(o => 
                <div key={o.id}>
                    {o.id < number  &&
                        <li>
                            {o.text}
                        </li>
                    }
                </div>
            )}
        </ul>
    )
}


export default List;
