import {deleteUser} from '../services/user.services';
import {removeResponse, saveResponse} from '../redux/actions';

export const deleteExistedUser = (password, _id, dispatch) => {

    deleteUser(_id, password)
        .then(({status, statusText }) =>
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
