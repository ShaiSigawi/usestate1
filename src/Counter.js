
import './App.css';

import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    function incr(){
        setCount(
            function (oldCount){
                return oldCount + 1
            }
        )
        console.log(count)
    }
    function resetCounter(){
        setCount(
            function (oldCount){
                return oldCount = 0
            }
        )
    }
  return (
    <div>
        <h1>Counter App</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1 to counter</button>
        <p><button onClick={resetCounter}>Click to reset the counter</button></p>
    </div>
  );
}

export default Counter;