import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button'
import styles from './TaskDetails.module.css'


function TaskDetails() {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (
        <>
            <div className={styles.Backbutton_container}>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className={styles.Taskdetails_container}>
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt explicabo expedita quis omnis qui eligendi. Ratione architecto, quam harum suscipit excepturi consectetur? Eligendi, ipsam dolores! Voluptas odio adipisci dolorem.</p>
            </div>
        </>
    )
}

export default TaskDetails;