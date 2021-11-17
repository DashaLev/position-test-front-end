import axios from 'axios';

const baseURL = 'http://localhost:5000/users'

const getUsers = () => {
    return axios.get(baseURL)
}

const createUser = (user) => {
    return axios.post(baseURL, user)
}

const putUser = (id, user) => {
    return axios.put(baseURL + '/' + id, user)
}

const deleteUser = (id, data) => {
    return axios.delete(baseURL + '/' + id, {data})
}

export { getUsers, createUser, putUser, deleteUser }
