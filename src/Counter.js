
import './App.css';
import {useState, useEffect} from "react"

function Counter(props) {
    const {countNum, maxNum, getReset, needToReset, getMaxValue} = props
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset,getReset])
    
    
    function incr(){
        setCount(
            function(oldcount){
                    getMaxValue (oldcount)
                    if (oldcount + countNum > maxNum)
                        return 0;
                    return oldcount + countNum

                }
        )
    }

    function resetCounter(){
        getReset(true)
        //setCount(0)
    }

  return (
    <div>
        <h1>Counter App</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {countNum} to counter</button>
        <p><button onClick={resetCounter}>Click to reset the counter</button></p>
    </div>
  );
}

export default Counter;