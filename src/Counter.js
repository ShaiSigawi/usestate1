
import './App.css';

import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [countNum, setCountNum] = useState(1)
    function incr(){
        setCount(
            function (oldCount){
                return oldCount += countNum
            }
        )
    }
    function resetCounter(){
        setCount(
            function (oldCount){
                return oldCount = 0
            }
        )
    }
    function handleCountNum(e){
        console.log(e);
        setCountNum(Number(e.target.value))
    }

  return (
    <div>
        <h1>Counter App</h1>
        <input type = "number" value = {countNum} onChange = {handleCountNum}/>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {countNum} to counter</button>
        <p><button onClick={resetCounter}>Click to reset the counter</button></p>
    </div>
  );
}

export default Counter;