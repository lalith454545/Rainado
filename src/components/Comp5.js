import { useState, useEffect } from "react";
function Time(){
    const [time, setTime]= useState(new Date().toLocaleDateString());
    useEffect(()=>{
        const ID= setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 500);
        return ()=> clearInterval(ID);
    }, []);
    return(
        <h1>Current time: {time}</h1>
    )
}
export default Time;