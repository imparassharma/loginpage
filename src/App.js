import React, { useState } from "react";
import pic1 from "../src/images/fb.png";
import pic2 from "../src/images/ig.png";
import pic3 from "../src/images/tw.png";

var userlogin = false;
var userIsregistered = false;

function Check(userlogin){

    const[ishover,update] = useState(false);
    const [fullname,setfullName] = useState(
        {
            fName: "",
            lName: ""
        }
    );

    function handleChange(event)
    {
        const value = event.target.value;
        const parent = event.target.name;
        setfullName(preValue=>{
            console.log(preValue);
            return{
                ...preValue,
                [parent] : value
            }
        })
    }

    

    const [wait,displayText]= useState("");

    function waitingTime(){
        displayText("Please Wait...");
    }
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
            <div className="main-login-box">
                <div className="login-box">
                    <h1>
                        {userIsregistered?"Please Login":"Please Register!"}
                    </h1>
                    <p>Hello <span>{fullname.fName}{" "}{fullname.lName}</span></p>
                    <div className="input-container">
                        {userIsregistered?<input placeholder="Username" type="text" name="fName" onChange={handleChange} value={fullname.fName}></input>:
                            <><input placeholder="First Name" type="text" name = "fName" onChange={handleChange} value={fullname.fName}></input>
                            <input placeholder="Last Name" type="text" name="lName" onChange={handleChange} value={fullname.lName }></input></>
                        }
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
                    onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={waitingTime}>
                        {userIsregistered?"Login":"Register"}
                    </button>
                </div>
                <div className="waitingTime">
                    <p>{wait}</p>
                </div>
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