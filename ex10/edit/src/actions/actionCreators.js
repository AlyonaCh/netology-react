import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLIAN_SERVICE_FIELD, CHANGE_FILTER, FILTER_SERVICE } from './actionTypes';
export function addService(name, price) {
    return {type: ADD_SERVICE, payload: {name, price}};
}
export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}
export function editService(id, name, price) {
    return {type: EDIT_SERVICE, payload: {id, name, price}};
}
export function filterService(find) {
    return {type: FILTER_SERVICE, payload: {find}};
}
export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}
export function cleanServiceField() {
    return {type: CLIAN_SERVICE_FIELD}
}
export function changeFilter(find) {
    return {type: CHANGE_FILTER, payload: {find}}
}
