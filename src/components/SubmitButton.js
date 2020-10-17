import React, { Fragment } from 'react'


const SubmitButton=(props)=>{

    const submit=(e)=>{
            e.preventdefult();
      

    }
    return (
        <Fragment>
           <input type={'submit'} onClick={submit}/>
        </Fragment>
    )
}

export default SubmitButton;