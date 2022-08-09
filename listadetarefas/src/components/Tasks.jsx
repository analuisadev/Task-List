import React from "react";
import Task from "./Task";


function Tasks({ tasks, handleTaskClick}) {
    return (
        <>
          {tasks.map((task) => (
            <Task task={task} handleTaskClick={handleTaskClick}/>
          ))}
        </>
    ) 
}

export default Tasks;