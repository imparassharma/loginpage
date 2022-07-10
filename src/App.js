import React, { useState } from "react";
import pic1 from "../src/images/fb.png";
import pic2 from "../src/images/ig.png";
import pic3 from "../src/images/tw.png";

var userlogin = false;
var userIsregistered = true;

function Check(userlogin){

    const[ishover,update] = useState(false);

    function mouseOver(){
        update(true)
    }
    function mouseOut(){
        update(false)
    }

    if(userlogin===true){
        return(
            <h1>Welcome User!</h1>
        )
    }
    else{
        return(
            <div className="login-box">
                <h1>
                    {userIsregistered?"Please Login":"Please Register!"}
                </h1>
                <div className="input-container">
                    <input placeholder="Username" type="text"></input>
                    <input placeholder="Password" type="password"></input>
                    {userIsregistered?null:<input placeholder="Confirm Password" type="password"></input>}
                </div>
                <div className="social">
                    <img src={pic1} alt="fb"/>
                    <img src={pic2} alt="ig"/>
                    <img src={pic3} alt="tw"/>
                </div>
                <button style={
                    {backgroundColor: ishover?"black":"white",color:ishover?"white":"black"}
                }
                onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    {userIsregistered?"Login":"Register"}
                </button>
            </div>
        )
    }
}

function App(){
    return(
        <div className="container">
            {Check(userlogin)}
        </div>
    )
}




export default App;