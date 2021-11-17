import {Users} from './users/Users';
import {CreateNewUser} from './createNewUser/CreateNewUser';
import {UserDetails} from './userDetails/UserDetails';
import {Route} from "react-router-dom";
import './Main.css'

export const Main = () => {

    return (
      <div className={'main'}>
          <Users/>
          <Route path={'/createUser'} component={CreateNewUser}/>
          <Route path={'/users/:id'} render={(props) => {
              return <UserDetails {...props} />
          }}/>
      </div>
    )
}
