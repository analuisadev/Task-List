import React from 'react';

import Button from './Button'
import styles from './Button.module.css'

function TaskDetails() {
    return (
        <>
            <div className={styles.Backbutton_container}>
                <Button>Voltar</Button>
            </div>
            <div className={styles.Taskdetails_container}>
                <p>Titulo</p>
                <p>daiowdjwoaidoawjdiwajdoiawjdaw</p>
            </div>
        </>
    )
}

export default TaskDetails