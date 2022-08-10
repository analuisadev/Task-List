import React from 'react';
import styles from './Task.module.css';


function Task({task, handleTaskClick, handleTaskDeletion}) {
    return (
        <div className={styles.task_container} style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className={styles.task_title} onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className={styles.buttons_container}>
                 <button className={styles.removeTask_button}onClick={() => handleTaskDeletion(task.id)}>X</button>
            </div>
        </div>
    )
   
};

export default Task;