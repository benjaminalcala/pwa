import {
    SET_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED} from './types';

export const setRobots = (searchField) => ({
    type: SET_SEARCH_FIELD,
    payload: searchField
})

export const requestRobots = () => dispatch => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(robots => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: robots}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}