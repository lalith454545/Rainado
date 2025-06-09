import { useState } from "react";
function Valid(){
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");
    const [mess, setMess]= useState("");
    function Check(){
        if(name.trim() && email.includes('@') && pass.length>=6){
            setMess("All done")
        }
        else{
            setMess("Not all details are correct")
        }
    }
    return(
        <div>
            <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Name"/>

            <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Email"/>

            <input
            type="password"
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
            placeholder="Password"/>

            <button onClick={Check}> 
                Submit
            </button>
            <p>{mess}</p>
        </div>
    )
}
export default Valid;