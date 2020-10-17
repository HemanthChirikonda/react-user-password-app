import React, { Fragment, useState } from "react"
import mainpagestyle from "../mainstyle";

const RegisterForm=()=>{

   
const [user,setuser]= useState({
     
});


const setEmail=(e)=>{
 setuser({...user,Email:e.target.value})
};

const setDob=(e)=>{
    setuser({...user,Email:e.target.value})
   };
   const setPassword=(e)=>{
    setuser({...user,Password:e.target.value})
   }
   const setAddressLine1=(e)=>{
    setuser({...user,Address:e.target.value})
   }
   const setAddressLine2=(e)=>{
    setuser({...user,Address2:e.target.value})
   }
   const setCity=(e)=>{
    setuser({...user,City:e.target.value})
   }
   const setState=(e)=>{
    setuser({...user,State:e.target.value})
   }
   const setZip=(e)=>{
    setuser({...user,Zip:e.target.value})
   }
   const setGridCheck=(e)=>{
    setuser({...user,Gridcheck:e.target.value})
   }
   const submit= async (data)=>{
    let responec = await fetch("https://trim-url-app.herokuapp.com/register",{
        method:"POST",
        headers: {
           'Content-Type': 'application/json'
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(data)
 
    });
    let message=await responec.json();
   if(message.message=== "user alredy present"){
     
       alert(message.message);
      
   }else{
       alert(message.message);
         window.location.href="./"
   }
   }
    const defaulyfunc=(event)=>{
    event.preventDefault()
    submit(user);
}
    return (
        <Fragment>
            <div style={mainpagestyle}>
                <div className={'col-6'}>
                    <form className={'row'} onSubmit={defaulyfunc}>
                        <input type={'text'} className={'col-6 mt-2 rounded'} placeholder={'Full Name'} required />
                        <input type={'date'} className={'col-6 mt-2 rounded'} placeholder={'Dob'} onChange={setDob} required/>
                        <input type={'email'} className={'col-6 mt-2 rounded'} placeholder={'E-Mail'} onChange={setEmail} required />
                        <input type={'password'} className={'col-6 mt-2 rounded'} placeholder={'Password'} onChange={setPassword} required />
                        <input type={'address'} className={'col-12 mt-2 rounded'} placeholder={'Address Line-1'} required onChange={setAddressLine1} />
                        <input type={'address'} className={'col-12 mt-2 rounded'} placeholder={'Address Line-2'} onChange={setAddressLine2} />
                        <input type={'text'} className={'col-4 mt-2 rounded'} placeholder={'City'} required onChange={setCity} />
                        <input type={'text'} className={'col-4 mt-2 rounded'} placeholder={'State'} required onChange={setState} />
                        <input type={'text'} className={'col-4 mt-2 rounded'} placeholder={'Zip'} required onChange={setZip}/>
                        <input type={"checkbox"} className={'m-2'} required onChange={setGridCheck}/>
                        <button type={'submit'} className={'col-12 mt-3 btn btn-primary'} >{'Register'}</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterForm;