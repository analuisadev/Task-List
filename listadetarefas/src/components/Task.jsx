import React from 'react';
import styles from './Task.module.css';


function Task({task}) {
    return (
        <div className={styles.task_container}>{task.title}</div>
        // <h1>{Task.title}</h1>
    )
};

export default Task;