import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { changeFilter, filterService } from '../actions/actionCreators';

function Filter(props) {
    const find = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const find = evt.target.value
        console.log(find)
        dispatch(changeFilter(find));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(filterService(find.find));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='find' onChange={handleChange} value={find.find} />
            <button type='submit'>Find</button>
        </form>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {serviceFilter} = state;
}
    

export default Filter;
