import React, {createContext, useState} from "react";

export const TaskContext = createContext();

export default function TaskContextProvider(props){
    // const Context = useState(TaskContext)
    const [state, setstate] = useState([
        {key: 1, title:"1 state"},
        {key: 2, title:"2 state"},
        {key: 3, title:"3 state"},
      ])
    return (
        <div>
            <TaskContext.Provider value={state}>
                {props.children}

            </TaskContext.Provider>
        </div>
    )
}