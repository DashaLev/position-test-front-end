import './UserForm.css'

export const UserForm = ({
         _id, user_name, first_name, last_name, email, user_type, onInputChange, readOnlyParameter, formErrors
    }) => {

    return (
        <form onSubmit={(e) =>
            { e.preventDefault() }} key={_id} className={'form-body'}>

              <label className={'form-body__label'}>
                  Username*
                  <input required type={'text'} name={'user_name'}
                         readOnly={readOnlyParameter}
                         defaultValue={user_name}
                         onChange={onInputChange}
                  />
              </label>
              <label className={'form-body__label'}>
                  First name*
                  <input required type={'text'} name={'first_name'}
                         defaultValue={first_name}
                         onChange={onInputChange}
                  />
              </label>
              <label className={'form-body__label'}>
                  Last name*
                  <input required type={'text'} name={'last_name'}
                         defaultValue={last_name}
                         onChange={onInputChange}
                  />
              </label>
              <label className={'form-body__label'}>
                  Email*
                  <input required type={'email'} name={'email'}
                         readOnly={readOnlyParameter}
                         defaultValue={email}
                         onChange={onInputChange}
                  />
              </label>
              { formErrors && Object.values(formErrors).map((value, i) => {
                if(value.length > 0){
                    return (
                        <p key={i} className={'form-body__err-title'}>{value}</p>
                    )
                } else {
                    return '';
                }
            })}
              <label className={'form-body__label'}>
                  Type*
                  <select required onChange={onInputChange} name={'user_type'} className={'form-body__select-list'}>
                      <option>{user_type}</option>
                      <option value={'driver'}>Driver</option>
                      <option value={'admin'}>Admin</option>
                  </select>
              </label>
              <label className={'form-body__label'}>
                  Password*
                  <input required type={'password'} name={'password'}  placeholder={'********'}
                         onChange={onInputChange}
                  />
              </label>
              <label className={'form-body__label'}>
                  Repeat password*
                  <input required type={'password'} name={'repeat_password'}  placeholder={'********'}
                         onChange={onInputChange}
                  />
              </label>
        </form>
    )
}
