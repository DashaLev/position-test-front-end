const emailRegExp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
const passwordRegExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/);

const validateCreateUser = (user) => {

    let { user_name, first_name, last_name, email, user_type, password, repeat_password } = user;

    if(!emailRegExp.test(email)) {
        return 'Not valid email'
    }

    if(!passwordRegExp.test(password)) {
        return 'Not valid password'
    }

    if (password !== repeat_password) {
        return 'Password do not match'
    }

    return {user_name, first_name, last_name, email, user_type, password}
}

const validateUpdDelUser = (user) => {

    let { first_name, last_name, password, repeat_password  } = user;

    if(!passwordRegExp.test(password)) {
        return 'Not valid password'
    }
    console.log(passwordRegExp.test(password));

    if (password !== repeat_password) {
        return 'Password do not match'
    }

    return { first_name, last_name, password }
}


export { validateCreateUser, validateUpdDelUser }
