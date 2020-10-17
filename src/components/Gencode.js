import React, { Fragment, useEffect, useState } from 'react'
import mainpagestyle from '../mainstyle';
import InputField from './InputField'



const Gencode = () => {
  
    const [user, setuser] = useState({
        "Email": '',
        "Dob": ''
    });

    const [otp, setotp] = useState('');
    useEffect(() => {
        console.log(user)
    }, [user]);
    const setEmail = (email) => {
        setuser({ ...user, Email: email })
    };
    const setDob = (e) => {
        setuser({ ...user, Dob: e.target.value })
    };
    const setOTP = (e) => {
        setotp(e.target.value);
    }
    const submit = async () => {
        let resdata = await fetch("https://trim-url-app.herokuapp.com/gencode", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user)

        });
        let loginRes = await resdata.json();
        alert(loginRes.message);
    }
    const defultfunc = (event) => {
        event.preventDefault()
        submit(user);
    }
    const submit2 = async (otp) => {

        let data = {
            "Email": user.Email,
            "Password": otp
        }
        let resdata = await fetch("https://trim-url-app.herokuapp.com/verify", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(data)

        });
        let loginRes = await resdata.json();
        if (loginRes.token) {
            console.log(loginRes.token, data);
            localStorage.setItem("Email", data.Email)
            localStorage.setItem("token", loginRes.token);
            window.location.href = "./reset"
        } else {
            alert(loginRes.message);
        }

    }
    const defultfunc2 = (event) => {
        event.preventDefault()
        submit2(otp);
    }
    return (
        <Fragment>
            <div style={mainpagestyle} className={'row'}>
                {/* <div className={'col-4'}></div> */}
                <div className={'col-4 mr-5'}>
                    <form className={'row'} onSubmit={defultfunc}>
                        <InputField onsubmited={setEmail} className={'col-12 mt-3 rounded'}/>
                        <input type={'date'} placeholder={'Dob'} onChange={setDob} className={'col-12 mt-3 rounded'} required/>
                        <button type={'submit'}  className={'col-12 mt-3 btn btn-primary'}>{'Send 6 digits code'}</button>
                    </form>
                </div>
                {/* <div className={'col-4'}></div> */}
                <div className={'col-4 ml-5'}>
                    <form className={'row'} onSubmit={defultfunc2}>

                        <input type={'text'}  required placeholder={'Enter OTP'} onChange={setOTP} className={'col-12 mt-3 rounded'}/>
                        <button type={'submit'} className={'col-12 mt-3 btn btn-primary'}>{'submit'}</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}


export default Gencode;