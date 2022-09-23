import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeService, editService, changeServiceField } from '../actions/actionCreators';

function List() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const handleRemove = id => {
        dispatch(removeService(id));
    }
    const handleEdit = (id, name, value) => {
        dispatch(changeServiceField(name, value));
    }

    return (
        <ul>
            {items.map(o => <li key={o.id}>
                {o.name} {o.price}
                <button onClick={() => handleEdit(o.id, o.name, o.price)}>edit</button>
                <button onClick={() => handleRemove(o.id)}>✕</button>
            </li>)}
        </ul>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {serviceList} = state;
}
    

export default List;
