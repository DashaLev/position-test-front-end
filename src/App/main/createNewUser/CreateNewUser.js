import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {UserForm} from '../../../Components/userForm/UserForm';
import {MainPageButton} from '../../../Components/mainPageButton/MainPageButton';
import {addNewUser} from '../../../helpers/addNewUser';
import {validateCreateUser} from '../../../services/user.validate.service';
import './CreateNewUser.css'

export const CreateNewUser = () => {
    let [ user, setUser] = useState({});
    let [ checkedUser, setCheckedUser ] = useState({})
    let [ formErr, setFormErr] = useState({})
    let [ formValid, setFormValid ] =  useState(true)

    let dispatch = useDispatch()

    const onInputChange = (e) => {
        let newUser = {[e.target.name]: e.target.value}
        setUser({...user, ...newUser})

        let validatedData = validateCreateUser(user)

        if (typeof validatedData === 'string') {
            setFormErr({validatedData})
        }

        if ((Object.values(formErr).length) > 0) {
            setFormValid(true)
        }

        if (typeof validatedData === 'object') {
            setCheckedUser(validatedData)
            setFormErr({})
            setFormValid(false)
        }
    }

    const createNewUser = () => {
        addNewUser(checkedUser, dispatch)
    }

    return (
        <div className={'create-new-user-form-wrap'}>
            <div className={'create-new-user-form__header'}>
                <h3 className={'create-new-user-form__header-title'}>Create new user</h3>

                <MainPageButton/>
            </div>

            <UserForm
                onInputChange={onInputChange}
                formErrors={formErr}
            />

            <div className={'create-new-user-form-button-wrap'}>
                <button className={'create-new-user-form-button-wrap__button'}
                        onClick={createNewUser}
                        disabled={formValid}
                >Create</button>
            </div>
        </div>
   )
}
