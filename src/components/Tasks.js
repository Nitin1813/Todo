import React, {useState} from "react";
const Addtask = ({onCancel}) =>{
    return (
        <div className="add-task-dialog">
        <input />
        <div className="add-task-action-container">
            <div className="btns-container">
                <button className="add-btn">Add Task</button>
                <button className="cancel-btn" onClick={()=> onCancel()} >Cancel</button>
            </div>
            <div className="icon-container"></div>
        </div>
    </div>
    )
   
}

const Tasks = () =>{
    const [showAddTasks, setsowAddTask] =useState(false);
    return (<div className="tasks">
       <h1>Inbox</h1>
       <div className="add-task-btn" onClick={()=>setsowAddTask((pre)=>!pre)}>
        <span className="plus">+</span>
        <span className="add-task-text">Add Task</span>
       </div>
       {showAddTasks && <Addtask onCancel={()=>setsowAddTask(false)} />}
    </div>)
}
export default Tasks;