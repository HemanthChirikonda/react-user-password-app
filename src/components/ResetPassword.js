import React, { Fragment, useEffect, useState } from 'react'
import mainpagestyle from '../mainstyle';
import PasswordField from './PasswordField'



const ResetPassword = () => {
  
    const [user, setuser] = useState({
        "New_Password": '',
        "Conform_Password": ''
    });
    useEffect(() => {
        console.log(user)
    }, [user]);

    const setNewPassword = (e) => {
        setuser({ ...user, New_Password: e.target.value })
    }
    const setConformPassword = (e) => {
        setuser({ ...user, Conform_Password: e.target.value })
    }
    const submit = async (user) => {
        if(user.New_Password === user.Conform_Password){
            let data={
                "Email":localStorage.getItem("Email"),
                "Password":user.New_Password
            }
            let resdata= await fetch("https://trim-url-app.herokuapp.com/newpassword",{
                method:"POST",
                headers: {
                   'Content-Type': 'application/json',
                   // 'Content-Type': 'application/x-www-form-urlencoded',
                   'authorization':localStorage.getItem("token")
                 },
                 body: JSON.stringify(data)
            
            });
            let loginRes= await resdata.json();
         alert(loginRes.message);
         window.location.href="./"
        }else{
            alert("Both passowrds are not same")
        } 

    }
    const defultfunc = (event) => {
        event.preventDefault()
        submit(user);
    }
    return (
        <Fragment>
           <div style={mainpagestyle} className={'row'}>
               <div className={'col-4'}>
               <form className={'row'} onSubmit={defultfunc}>
                <PasswordField onsubmited={setNewPassword} placeholder={'New Password'} className={'col-12 mt-3 rounded'}/>
                <PasswordField onsubmited={setConformPassword} placeholder={'Coform Password'} className={'col-12 mt-3 rounded'}/>
                <button type={'submit'} className={'col-12 mt-3 btn btn-primary'}>{'Reset Password'} </button>
            </form>

               </div>
           </div>

        </Fragment>
    )
}


export default ResetPassword;