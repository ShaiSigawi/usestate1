
import './App.css';
import {useState, useEffect} from "react"

function Counter(props) {
    const {countNum, maxNum, getReset, needToReset, setMaxValue} = props
    const [count, setCount] = useState(1)
    
    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset,getReset])
    
    function incr(){
        setCount(
            function(count){
                    setMaxValue (count + countNum)
                    if (count + countNum > maxNum)
                        return 0;
                    return count + countNum

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