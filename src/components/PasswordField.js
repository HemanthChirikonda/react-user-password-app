import React, { Fragment, useState } from "react"

const PasswordField=()=>{
    const [stateValue,setStateValue]=useState('')

    const handlechange=(e)=>{
        console.log(e.target.value)
        setStateValue(e.target.value);
    }
    return (
       <Fragment>
           <input type={'password'} onChange={handlechange}/>
       </Fragment>
    )
}

export default PasswordField;