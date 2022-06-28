import React from "react";
import pic1 from "../src/images/fb.png";
import pic2 from "../src/images/ig.png";
import pic3 from "../src/images/tw.png";

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
                <div className="social">
                    <img src={pic1} alt="fb"/>
                    <img src={pic2} alt="ig"/>
                    <img src={pic3} alt="tw"/>
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