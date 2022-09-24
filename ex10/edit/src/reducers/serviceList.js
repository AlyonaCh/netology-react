import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE, FILTER_SERVICE} from '../actions/actionTypes'
const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000, show: true},
];
export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload;
            return [...state, {id: nanoid(), name, price: Number(price), show: true}];
        case EDIT_SERVICE:
            const {name: editName, price: editPrice, id: editId} = action.payload;
            return state.map((item)=>{
                if (item.id === editId) {
                    item.name = editName
                    item.price = Number(editPrice)
                }
                return item
            });
        case FILTER_SERVICE:
            const {find} = action.payload;
            return state.map((item)=>{
                if (item.name.includes(find)) {
                    item.show = true
                } else {
                    item.show = false
                }
                return item
            });
        case REMOVE_SERVICE:
            const {id} = action.payload;
            return state.filter(service => service.id !== id);
        default:
            return state;
    }
}