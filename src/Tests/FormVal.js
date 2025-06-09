import { useState } from "react";
function FVal(){
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [msgs, setMsgs]= useState("");
    function display(){
        if(name.trim() && email.trim()){
            setMsgs("Name: "+name+" Email: "+email);
        }else{
            setMsgs("Details Missing")
        }
    }
    return(
        <div>
            <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e)=> setName(e.target.value)}/>
            <br/>
            <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e)=> setEmail(e.target.value)}/>
            <button onClick={display}>
                Submit
            </button>
            <p>{msgs}</p>
        </div>
    )
}
export default FVal;