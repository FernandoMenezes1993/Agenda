import React, {useState} from 'react';

import Tasks from './components/tasks';
import './App.css';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar react',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar JS',
      completed: false,
    },
    {
      id: '3',
      title: 'Estudar Node.JS',
      completed: false,
    },
    {
      id: '3',
      title: 'Estudar Node.JS',
      completed: false,
    }    
  ]);

  return(
    <>
      <div className='container'>
        <AddTask/>
        <Tasks tasks={tasks} />
      </div>
      
    </>
  )
}

export default App;