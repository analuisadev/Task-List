import React, { useState } from 'react';
import styles from './AddTask.module.css'
import Button from './Button'

function AddTask({handleTaskAddition}) {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        console.log(e);
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }
    return (
        <div className={styles.AddTask_container}>
            <input onChange={handleInputChange} value={inputData} type="text" className={styles.AddTask_input}/>
            <div className={styles.AddTask_button_container}>
                <Button onClick={handleAddTaskClick}>Adicionar</Button> 
            </div>

        </div>
    )
};

export default AddTask;