
import React from "react"


const InputField = (props) => {


    const handleChange = (e) => {
        console.log(e.target.value)
        props.onsubmited(e.target.value)
    }


    return (
        <>
            <input type={"email"} placeholder={'user@something.com'} onChange={handleChange} className={props.className} required />
        </>

    )
}

export default InputField;