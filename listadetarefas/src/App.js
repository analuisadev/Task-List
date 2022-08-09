import React, { useState } from "react";
import Tasks from './components/Tasks';
import styles from './App.module.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar ReactJS',
      completed: false,
    },
     
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
  ])
  return (
    <>
      <div className={styles.container}>
        <Tasks tasks={tasks}/>
      </div>
       
    </>

    
    
  )
}

export default App;