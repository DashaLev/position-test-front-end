import {useHistory} from 'react-router';

import './MainPageButton.css'

export const MainPageButton = () => {
    let history = useHistory()

    const navMainPage = () => {
        history.push('/users')
    }

    return (
        <div className={'user-details-create-new-user-form-close-button'} onClick={navMainPage}/>
    )
}
