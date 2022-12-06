
import './App.css';
import {useState, useEffect} from "react"

function Counter(props) {
    const {countNum, maxNum, getReset, needToReset,getMaxValue, needMaxValue} = props
    const [count, setCount] = useState(1)
    
    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
        if(needMaxValue){
            maxNum(0)
            getMaxValue(max)
        }
    },[needToReset,getReset])
    
    function incr(){
        setCount(
            function(oldCount){
                if (oldCount + countNum > maxNum)
                    return 0
                return oldCount + countNum
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