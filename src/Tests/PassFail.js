import { useState } from "react";
function Score(){
    // const [pass, setPass]= useState(false);
    const [score, setScore]= useState(0);
    const [color, setColor]= useState("");
    const [mess, setMess]= useState("");
    function det(){
        if(score>=40){
            // setPass(true);
            setColor("green");
            setMess("You passed")
        }else{
            // setPass(false);
            setColor("red");
            setMess("You failed")
        }
    }
    return(
        <div style={{backgroundColor: color, height:"100vh", padding:"20px"}}>
            <input
            type="number"
            value={score}
            onChange={(e)=> setScore(e.target.value)}
            placeholder="Enter Score"/>

            <button onClick={det}>
                Submit Score
            </button>


            <h1>{mess}</h1>
        </div>
    )
}
export default Score;