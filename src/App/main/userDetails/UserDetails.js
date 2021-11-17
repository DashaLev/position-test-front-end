import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {UserForm} from '../../../Components/userForm/UserForm';
import {MainPageButton} from '../../../Components/mainPageButton/MainPageButton';
import {updateExistedUser} from '../../../helpers/updateExistedUser';
import {deleteExistedUser} from '../../../helpers/deleteExistedUser';
import {validateUpdDelUser} from '../../../services/user.validate.service';
import './UserDetails.css'

export const UserDetails = ({history: {location}}) => {

    let { state:user } = location;
    let { _id, user_name, first_name, last_name, email, user_type } = user;
    let [ updUser, setUpdUser] = useState({});
    let [ checkedUser, setCheckedUser ] = useState({})
    let [ formErr,setFormErr] = useState({})
    let [ formValid, setFormValid ] =  useState(true)

    let dispatch = useDispatch();

    const onInputChangeUDetails = (e) => {
        let changesToUser = {[e.target.name]: e.target.value}
        setUpdUser({...updUser, ...changesToUser})

        let validatedData = validateUpdDelUser(updUser)

        setFormErr({validatedData})

        if ((Object.values(formErr).length) > 0) {
            setFormValid(true)
        }

        if (typeof validatedData === 'object') {
            setCheckedUser(validatedData)
            setFormErr({})
            setFormValid(false)
        }
    }
    console.log(formErr);

    const updateUserInBase = () => {
        updateExistedUser(checkedUser, _id, dispatch)
    }

    const deleteUserFromBase = () => {
        let { password } = checkedUser
        deleteExistedUser({ password }, _id, dispatch)
    }

    return (
        <div className={'user-details-form-wrap'}>
            <div className={'user-details-form-wrap__header'}>
                <h3 className={'user-details-form-wrap__header-title'}>
                    <span>{first_name}</span> <span>{last_name}</span>
                </h3>
                <MainPageButton/>
            </div>

            <UserForm
                _id={_id}
                user_name={user_name}
                first_name={first_name}
                last_name={last_name}
                email={email}
                user_type={user_type}
                onInputChange={onInputChangeUDetails}
                readOnlyParameter={true}
                formErrors={formErr}
            />

            <div className={'user-details-form-buttons'}>
                <button className={'user-details-form-buttons__button user-details-form-buttons__button_bg-red'}
                        onClick={deleteUserFromBase}
                        disabled={formValid}
                >Delete</button>
                <button className={'user-details-form-buttons__button user-details-form-buttons__button_bg-blue'}
                        onClick={updateUserInBase}
                        disabled={formValid}
                >Save</button>
            </div>
        </div>
    )
}

