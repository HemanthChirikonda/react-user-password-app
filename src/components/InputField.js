import { Fragment, useState } from "react"
import React from "react"


const InputField=()=>{
const [statevalue,setStateValue]=useState('');

const handleChange=(e)=>{
    console.log(e.target.value)
setStateValue(e.target.value)
}


return (
<>
<input type={"text"} onChange={handleChange} />
</>

)
}

export default InputField;