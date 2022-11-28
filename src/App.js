
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [countNum, setCountNum] = useState(1)
  const [maxNum, setMaxNum] = useState(1)

  function handleCountNum(e){
    console.log(e);
    setCountNum(Number(e.target.value))
  }

  function handleMaxNum(e){
    console.log(e);
    setMaxNum(Number(e.target.value))
  }
  return (
    <div className="App">
      <h3>What count to add</h3>
      <input type= "number" value = {countNum} onChange = {handleCountNum}/>
      <h3>Max num is</h3>
      <input type= "number" value = {maxNum} onChange = {handleMaxNum}/>

      <Counter countNum = {countNum} maxNum = {maxNum} />
      <Counter countNum = {countNum} maxNum = {maxNum} />

    </div>
  );
}


export default App;
