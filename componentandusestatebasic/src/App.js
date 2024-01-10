import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);// hooks should be created an initilize at top in the component, u can use the hook inside the compnent only
  function add(){
    return setCount(count+1);
  }
  function sub(){
    return (count!==0)?setCount(count-1):count;
  }
  return (
    <>
    <div className='box'>
      <p>{count}</p>
       <button className='add' onClick={add}>add</button> {/*we can also use anonomus function <button onClick={()=>setCount(count+1)}>add</button> */}
       <button className='sub' onClick={sub}>sub</button>
       <button className='reset' onClick={() => setCount(0)}>reset</button>                                     { /*<button onClick={()=>{return (count!==0)?setCount(count-1):count}}>sub</button> */}
    </div>
    </>
    
  );
}

export default App;
