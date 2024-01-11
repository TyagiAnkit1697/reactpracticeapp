import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState([
    {id:123, name:"walking", isCompleted: false},
    {id:134, name:"Running", isCompleted: true},
    {id:145, name:"jumping", isCompleted: false}
  ])
  const [show, setShow] = useState(true); //this state for toggeling

  function handelDelete(id){
    setTask(tasks.filter(task => task.id !== id))
  }
  return (
    <div className='App'>
      <h1>Task List</h1>
      <ul>
      <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>{/*to hide or show the list. if true show, if false hide*/}
        {show && tasks.map((task) => (
          <li key={task.id} className = {(task.isCompleted)?"completed":"incomplete"}>
            <span>{task.id} - {task.name}</span>
            <button className='delete' onClick={() => handelDelete(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
