import React from "react";
import Sitebar from "./Sidebar";
import Tasks from "./Tasks";

const Content = () =>{
    return <div className="content">
        <Sitebar />
        <Tasks />
        </div>
}
export default Content;