import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getUsers} from '../../../services/user.services';
import {User} from '../user/User';
import {loadUsers} from '../../../redux/actions';
import './Users.css'

export const Users = () => {

    let { usersList } = useSelector(state => state.usersReducer)

    let dispatch = useDispatch()

    useEffect(()=>{
        getUsers().then(({data}) => dispatch(loadUsers(data)))
    },[dispatch])

    return (
        <div className={'users'}>
            <table className={'users-table'}>
                <thead className={'users-table__thead'}>
                    <tr>
                        <td>USERNAME</td>
                        <td>FIRST NAME</td>
                        <td>LAST NAME</td>
                        <td>EMAIL</td>
                        <td>TYPE</td>
                    </tr>
                </thead>
                <tbody className={'users-table__tbody'}>
                {
                    usersList &&
                    usersList.map(user => <User key={user._id} user={user}/>)
                }
                </tbody>
            </table>
        </div>
    );
}
