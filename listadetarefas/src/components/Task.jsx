import React from 'react';
import styles from './Task.module.css';
import {CgClose, CgInfo} from 'react-icons/cg'

function Task({task, handleTaskClick, handleTaskDeletion}) {
    return (
        <div className={styles.task_container} style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className={styles.task_title} onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className={styles.buttons_container}>
                 <button className={styles.removeTask_button}onClick={() => handleTaskDeletion(task.id)}><CgClose /></button>
                 <button className={styles.seeTask_Detailsbutton}><CgInfo /></button>
            </div>
        </div>
    )
   
};

export default Task;