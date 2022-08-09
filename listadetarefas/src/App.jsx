import React, { useState } from "react";
import Tasks from './components/Tasks';
import styles from './App.module.css';
import AddTask from "./components/AddTask";

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

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks, 
      {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    },
  ];
    setTasks(newTasks)
  }
  return (
    <>
      <div className={styles.container}>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks}/>
      </div>
       
    </>

    
    
  )
}

export default App;