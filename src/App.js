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
            <h1>Please Login!</h1>
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