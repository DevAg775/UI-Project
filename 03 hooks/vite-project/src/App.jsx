import React,{useState} from 'react'



const App = () => {

 const [a, setfirst] = useState(0)
  
 function IncA(){
  setfirst(a+1)
 }

 function decA(){
  setfirst(a-1)
 }

 function add5inA(){
  setfirst(a+5)
 }

  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={IncA}>Increase</button>
      <button onClick={decA}>Decrease</button>
      <button onClick={add5inA}>Add 5</button>
    </div>
  )
}

export default App