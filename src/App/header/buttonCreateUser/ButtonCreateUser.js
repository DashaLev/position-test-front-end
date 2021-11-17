import {Link} from 'react-router-dom';
import './ButtonCreateUser.css'

export const ButtonCreateUser = () => {

    return (
        <div className={'button-create-user'}>
            <Link to={'/createUser'} className={'button-create-user__link'}>Create User</Link>
        </div>
    )
}
