import { useState } from "react";
function Login(){
    const [log, setLog]= useState(false);
    const [name, setName]= useState("");
    const [pass, setPass]= useState("");
    const [mess, setMess]= useState("");
    const usernames= ["Lalith", "Srinandan", "Rohit"];
    const passwords= [123, 456, 789];
    function fun(){
        let f= false;
        for(let i=0; i<3; i++){
            if(usernames[i]==name && passwords[i]==pass) f=true;
        }
        if(f){
            setMess("Login Successful");
            setLog(true);
        }else{
            setMess("Login Unsuccessful");
            setLog(false);
        }
    }
    const arr=[];
    return(
        <div>
            <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Enter Name"/>
            <br/>
            <input
            type="password"
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
            placeholder="Enter Password"/>
            <br/>
            <button onClick={fun}>
                Submit
            </button>
            <p>Login Status: {mess}</p>
            <p>Login hook value: {log+""}</p>

        </div>
    )
}
export default Login;