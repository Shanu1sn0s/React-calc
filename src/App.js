import React from 'react'
import { useState } from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value =>{
    // eslint-disable-next-line 
    if(ops.includes(value) && calc === '' ||
      
// eslint-disable-next-line 
    ops.includes(value) && ops.includes(calc.slice(-1) )
      ) {
        return;
      }
    setCalc(calc + value);

    if(!ops.includes(value)){
      // eslint-disable-next-line 
      setResult(eval(calc + value).toString());
    }
  }

const runNumbers = () =>{
  const nums =[];

for (let i = 1; i < 10; i++){
  nums.push(
    <button  
    onClick={()=> updateCalc(i.toString())}
    key = {i}>{i}</button>
    
  )
}
return nums;
}
function calculate(){
  // eslint-disable-next-line 
  const answer = setCalc(eval(calc).toString())
}

function clear(){
  if(calc===''){
    return;
  } else{
    const value = calc.slice(0,-1);

    setCalc(value);
  }
}
  return (
    <div className="App">
      <div className="calculator">
        <div id ="input"className="display">
          {result ? <span>[{result}]</span> : ' '} <span></span>
    
          {calc || "0"}
        </div>
        <div className="functionality">
          <button className='slash'onClick={()=> updateCalc('/')}>/</button>
          <button onClick={()=> updateCalc('*')}>X</button>
          <button onClick={()=> updateCalc('+')}>+</button>
          <button onClick={()=> updateCalc('-')}>-</button>
          <button onClick={clear}>C</button>
        </div>
        <div className="digits">
          {runNumbers()}
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick={()=> updateCalc('.')}>.</button>
        
        <button className='equals' onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
