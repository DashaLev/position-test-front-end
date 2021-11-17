import {useSelector} from 'react-redux';
import './Notifications.css'

export const Notifications = () => {

    let {responseList} = useSelector(state => state.responsesReducer)

    let { status, statusText, message } = responseList

    let notificationType = ''

    if (status === 201 || status === 204) {
        notificationType = 'successful'
    }

    if (status === 400 || status === 404 || status === 409) {
        notificationType = 'error'
    }

    return (
      <div className={'notifications'}>

          <div className={ notificationType === 'error'
              ? 'notifications__massage-item notifications__massage-item_red'
              : 'notifications__massage-item notifications__massage-item_opacity_hidden'}>{message}</div>

          <div className={ notificationType === 'successful'
              ? 'notifications__massage-item notifications__massage-item_green'
              : 'notifications__massage-item notifications__massage-item_opacity_hidden'}>{statusText}</div>

      </div>
  )
}
