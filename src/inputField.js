import React, { useState } from 'react' 

export default function InputField({addTask}){
    const [state, setstate] = useState("")
    const submit = () =>{
        addTask(state);
        setstate("")
    }
    const onChange= (e) =>{
        setstate(e.target.value)

    }
    return (
        <span >
            <input type="text" value={state} onChange={onChange} placeholder="Add Task" /> 
            <button onClick={submit} >Add Task   </button>
        </span>
    )
}