import React from "react";
import Task from "./Task";


function Tasks({ tasks }) {
    return (
        <>
            {tasks.map(task => <Task task={task}/>)}
        
        </>
    ) 
}

export default Tasks;