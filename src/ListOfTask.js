import React , {useState} from 'react' 
import { TaskContext } from './taskContext'

export default function List(props){
    // const Context = useState(TaskContext)
    return (
        <div>
            {props.map(item=>{
                return <p key={item.key}>{item.title}</p>
            })}
            No data</div>
    )
}