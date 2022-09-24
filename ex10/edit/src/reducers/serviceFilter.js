import {CHANGE_FILTER} from '../actions/actionTypes'
const initialState = {
    find: ''
};
export default function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FILTER:
            const {find} = action.payload;
            console.log(action.payload)
            return {find: find};
        default:
            return state;
    }
}