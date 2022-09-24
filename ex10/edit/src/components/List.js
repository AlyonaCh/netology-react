import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeService, editService, changeServiceField } from '../actions/actionCreators';

function List() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const handleRemove = id => {
        dispatch(removeService(id));
    }
    const handleEdit = (id, name, price) => {
        dispatch(changeServiceField('name', name));
        dispatch(changeServiceField('id', id));
        dispatch(changeServiceField('price', price));
    }

    return (
        <ul>
            {items.map(o => 
                <div key={o.id}>
                    {o.show &&
                        <li>
                            {o.name} {o.price}
                            <button onClick={() => handleEdit(o.id, o.name, o.price)}>edit</button>
                            <button onClick={() => handleRemove(o.id)}>✕</button>
                        </li>
                    }
                </div>
            )}
        </ul>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {serviceList} = state;
}
    

export default List;
