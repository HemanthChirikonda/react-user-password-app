import React, { Fragment } from 'react'
import InputField from './InputField'
import PasswordField from './PasswordField'
import SubmitButton from './SubmitButton'


const UserLoginForm = () => {
    return (
        <Fragment>
            <form>
                <InputField />
                <PasswordField />
                <SubmitButton/>
            </form>
        </Fragment>
    )
}


export default UserLoginForm;