import React, { Fragment, useEffect, useState } from 'react'
import routes from '../routes';
import InputField from './InputField'
import PasswordField from './PasswordField'
import  { Link} from 'react-router-dom'
import mainpagestyle from '../mainstyle';
// import SubmitButton from './SubmitButton'


const UserLoginForm = () => {
  
    const [user, setuser] = useState({
        "Email": '',
        "Password": ''
    });
    useEffect(() => {
        console.log(user)
    }, [user])
    const setEmail = (email) => {
        setuser({ ...user, Email: email })
    };
    const setpassword = (password) => {
        setuser({ ...user, Password: password })
    };

    const submit = async () => {

        // e.preventdefult();
        let res = await fetch("https://trim-url-app.herokuapp.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(user)

        });

        let loginRes = await res.json();
        if (loginRes.token) {
            console.log(loginRes.token, user);
            localStorage.setItem("Email", user.Email)
            localStorage.setItem("token", loginRes.token);
            window.location.href = "./dashboard"
        } else {
            alert(loginRes.message);
        }

    }
    const defultfunc = (event) => {
        event.preventDefault()
        submit(user);
    }
    return (
        <Fragment>
            <div style={mainpagestyle} className={'col-12'}>
               
               <form className={'col-4'} onSubmit={defultfunc}>
                    <InputField onsubmited={setEmail} className={'col-12 mt-3 rounded'}/>
                    <PasswordField onsubmited={setpassword} className={'col-12 mt-3 rounded'}/>
                    <button type={'submit'}  className={'col-12 mt-3 btn btn-primary'}>{'Login'}</button>
                    <Link  to={routes.genCode}style={{color:'white',fontSize:'15px'}} className={'mt-2 col-6'}>{'Forgot password ?'}</Link >
                    <Link  to={routes.register}style={{color:'white',fontSize:'15px'}} className={'mt-2 col-6'}>{'Create new account'}</Link >
                </form>
               
            </div>

        </Fragment>
    )
}


export default UserLoginForm;