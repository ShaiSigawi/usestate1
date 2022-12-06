
import './App.css';
import Counter from './Counter';
import {useState} from 'react';

function App() {
  const [countNum, setCountNum] = useState(1)
  const [maxNum, setMaxNum] = useState(10)
  const [reset, setReset] = useState(false)
  const [maxValue, setMaxValue] = useState(0)

  function handleCountNum(e){
    console.log(e);
    setCountNum(Number(e.target.value))
  }

  function handleMaxNum(e){
    console.log(e);
    setMaxNum(Number(e.target.value))
  }

  function getReset(data){
    console.log(data)
    setReset(data)
  }

  function getMaxValue(value){
    console.log(value)
    setMaxValue(value)
  }

  return (
    <div className="App">
      <h3>What count to add</h3>
      <input type= "number" value = {countNum} onChange = {handleCountNum}/>
      <h3>Max num is</h3>
      <input type= "number" value = {maxNum} onChange = {handleMaxNum}/>
      <h3>Max num to add</h3>
      <input type= "number" value = {maxValue} onChange = {getMaxValue}/>
      <Counter countNum = {countNum} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} getMaxValue = {getMaxValue} needMaxValue = {maxValue} />
      <Counter countNum = {countNum} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} getMaxValue = {getMaxValue} needMaxValue = {maxValue}/>

    </div>
  );
}


export default App;
