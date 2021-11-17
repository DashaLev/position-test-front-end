import {createUser} from '../services/user.services';
import {removeResponse, saveResponse} from '../redux/actions';

export const addNewUser = (user, dispatch) => {

    createUser(user)
        .then(({status, statusText}) =>
            dispatch(saveResponse({status, statusText})))
        .catch(err => {
            let status = err.response.status
            let message = err.response.data.message

            dispatch(saveResponse({status, message}))
        });

    window.scrollTo(0, 0)

    setTimeout(() => {
        dispatch(removeResponse())
    }, 4000)
}
