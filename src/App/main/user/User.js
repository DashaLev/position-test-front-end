import {useHistory} from 'react-router';
import './User.css'

export const User = ({user, user: { user_name, first_name, last_name, email, user_type }}) => {
    let history = useHistory();

    let navigate = () => {
        history.push(
            '/users/' + user._id,
            user
        );
    };

   return (
       <tr onClick={navigate} className={'user'}>
           <td>{user_name}</td>
           <td className={'user__item_firstLetter'}>{first_name}</td>
           <td className={'user__item_firstLetter'}>{last_name}</td>
           <td>{email}</td>
           <td className={'user__item_firstLetter'}>{user_type}</td>
       </tr>
   )
}
