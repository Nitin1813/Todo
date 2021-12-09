import React, {useState} from "react";
import Sitebar from "./Sidebar";
import Tasks from "./Tasks";


const Content = () =>{
    const [selected, setselected] = useState('Inbox');
    return <div className="content">
        <Sitebar selected={selected} setselected={setselected} />
        <Tasks selected={selected} />
        </div>
}
export default Content;