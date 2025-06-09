import { useState, useEffect } from "react";
function Saved(){
    const [saved, setSaved]= useState("");
    const [mess, setMess]= useState("");
    useEffect(()=>{
        const ID= setTimeout(()=>{
            if(mess.trim()){
                setSaved(mess);
            }
        }, 3000)
        return ()=> clearTimeout(ID);
    }, [mess]);
    return(
        <div>
            <input 
            type="text"
            value={mess}
            onChange={(e)=> setMess(e.target.value)}
            placeholder="Enter text"/>

            <p>The text is: {saved}</p>
        </div>
    )
}
export default Saved;