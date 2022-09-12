import { useState } from "react";
import { useEffect } from "react";
import {useRef} from "react";


function App() {
  const [timer, setTimer] = useState(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const ref =useRef(null);


  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount2(count2 - 1);
  };

  useEffect(() => {
    console.log('useEffect');
  }, [count2]);

  useEffect(()=> {
    const interval =   setInterval (() => {
      console.log('timer');
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  },);

  const handleFocus = () => {
  ref.current.style.color = 'red';
    
  };

  return (
    <div>
      <input ref={ref}/>
      <button onClick={handleFocus}>ref</button>
      {count}
      <button onClick={increase}>+</button>  
      {count2}
      <button onClick={decrease}>-</button> 
      {timer}

    </div>
  )
}

export default App;
