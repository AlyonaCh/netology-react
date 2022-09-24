import {CHANGE_SERVICE_FIELD, CLIAN_SERVICE_FIELD} from '../actions/actionTypes'
const initialState = {
    id: null,
    name: '',
    price: null,
};
export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case CLIAN_SERVICE_FIELD:
            return {
                id: null,
                name: '',
                price: 0,
            };
        default:
            return state;
    }
}
