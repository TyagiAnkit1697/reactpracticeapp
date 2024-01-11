import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  const info = "Something";
  return (
    <div className='App'>
      <Header/>
      <TaskList info = {info}/>
    </div>
  )
}

export default App;

//prop drilling => wen we pass prop from one component to another.