import { useState } from "react";
function Joke(){
    const arr=["j1", "j2", "j3", "j4", "j5"];
    const [joke, setJoke]= useState("");
    function fun(){
        let num= Math.floor(Math.random()*(5-1+1))+1-1;
        setJoke(arr[num]);
    }
    return(
        <div>
            <button onClick={fun}>
                Click for random joke
            </button>
            <p>The joke is {joke}</p>
        </div>
    )
}
export default Joke;