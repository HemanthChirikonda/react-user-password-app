import React, { Fragment } from "react"

const PasswordField=(props)=>{
    

    const handlechange=(e)=>{
        console.log(e.target.value);
        props.onsubmited(e.target.value);
    }
  
    return (
       <Fragment>
           <input type={'password'} required placeholder={ props.placeholder? props.placeholder:'password'}onChange={handlechange} className={props.className}/>
       </Fragment>
    )
}

export default PasswordField;