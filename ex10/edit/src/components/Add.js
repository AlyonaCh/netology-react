import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import { changeServiceField, addService, editService, cleanServiceField, filterService } from '../actions/actionCreators';

function Add(props) {
    const {item} = props;
    const find = useSelector(state => state.serviceFilter);
    const handleChange = evt => {
        const {name, value} = evt.target;
        props.onChange(name, value);
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        if (evt.target.id == 'Save') {
            if (!item.id) {
                props.onSave(item.name, item.price);
                props.onClean();
            }else {
                props.onEdit(item.id, item.name, item.price);
                props.onClean();
            }
        } else {
            props.onClean();
        }
        props.onFilter(find.find);
        
    }

    return ( 
        <form >
            <input name='name' onChange={handleChange} value={item.name} />
            <input type='number' name='price' onChange={handleChange} value={item.price} />
            <button id="Save" type='submit'onClick={handleSubmit}>Save</button>
            <button id="Clean" type='submit' onClick={handleSubmit}>Clean</button>
        </form>
    )
}

Add.propTypes = {
    item: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
        }).isRequired,
        onSave: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
}
const mapStateToProps = (state, ownProps) => {
    const { serviceAdd } = state;
        return { item: serviceAdd };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (name, value) => dispatch(changeServiceField(name, value)),
        onClean: () => dispatch(cleanServiceField()),
        onSave: (name, value) => dispatch(addService(name, value)),
        onEdit: (id, name, value) => dispatch(editService(id, name, value)),
        onFilter: (find) => dispatch(filterService(find)),
    }
};

    
export default connect(mapStateToProps, mapDispatchToProps)(Add);
