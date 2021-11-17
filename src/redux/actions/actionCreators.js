import { DELETE_RESPONSE, GET_USERS, SET_RESPONSE } from './actionTypes'

export const loadUsers = (payload) => ({type: GET_USERS, payload})

export const saveResponse = (payload) => ({type: SET_RESPONSE, payload})
export const removeResponse = () => ({type: DELETE_RESPONSE})
