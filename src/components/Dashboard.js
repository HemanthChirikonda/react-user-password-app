import React, { Fragment } from "react"
import mainpagestyle from "../mainstyle";




const Dashboard=()=>{


    const logout=()=>{
        localStorage.removeItem("token");
        window.location.href="./"
    }
    return(
        <Fragment>
            <div style={mainpagestyle} className={'row'}>
            <h1 className={'col-12'}>{'YOU HAVE SUCCESSFYLLY LOGGED IN'}</h1>
            <div className={'col-12'}>
                <div className={'col-4'}></div>
                <button onClick={logout} className={'col-4 btn btn-primary'}>{'Log Out'}</button>
                <div className={'col-4'}></div>
            </div>
    
            </div>
        </Fragment>
    )
}

export default Dashboard;