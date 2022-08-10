import React, { useState } from "react";
import Tasks from './components/Tasks';
import styles from './App.module.css';
import AddTask from "./components/AddTask";
import {v4 as uiuidv4} from 'uuid';


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

   const handleTaskClick = (taskId => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) return {...task, completed: !task.completed}

        return task
      })
      setTasks(newTasks);
    })
      

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ...tasks, 
        {
          title: taskTitle,
          id: uiuidv4(),
          completed: false,
        },
      ];

      setTasks(newTasks)
    }

    const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)

      setTasks(newTasks)
    }

    return (
      <>
        <div className={styles.container}>
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
        </div>
      </>   
    )
}

export default App;    