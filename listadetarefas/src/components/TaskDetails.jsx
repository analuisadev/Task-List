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
                <Button>Voltar</Button>
            </div>
            <div className={styles.Taskdetails_container}>
                <h2>{params.taskTitle}</h2>
                <p>daiowdjwoaidoawjdiwajdoiawjdaw</p>
            </div>
        </>
    )
}

export default TaskDetails;