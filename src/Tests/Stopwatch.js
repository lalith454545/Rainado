import { useState, useEffect } from "react";
function Stop(){
    const [sec, setSec]= useState(0);
    const [start, setStart]= useState(false);
    function st(){
        setStart(true);
    }
    function stop(){
        setStart(false);
    }
    function reset(){
        setStart(false);
        setSec(0);
    }
    useEffect(()=>{
        let ID;
        if(start){
            ID= setInterval(()=>{
                setSec((prev)=> prev+1);
            }, 1000);
        }
        return ()=> clearInterval(ID);
    }, [start]);

    return(
        <div>
            <h1>Timer: {sec}</h1>
            <button onClick={st}>
                Start
            </button>
            <button onClick={stop}>
                Stop
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    )
}
export default Stop;