import React from "react";

var userlogin = false;

function check(userlogin){
    if(userlogin===true){
        return(
            <h1>Welcome User!</h1>
        )
    }
    else{
        return(
            <div className="login-box">
                <h1>Please Login!</h1>
                <div className="input-container">
                    <input placeholder="Username" type="text"></input>
                    <input placeholder="Password" type="password"></input>
                </div>
                <button>Login</button>
            </div>
        )
    }
}

function App(){
    return(
        <div className="container">
            {check(userlogin)}
        </div>
    )
}




export default App;