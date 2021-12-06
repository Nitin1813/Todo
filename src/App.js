import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import InputField from './inputField';
import list from './ListOfTask';
import List from './ListOfTask';
import { useState } from 'react';
import TaskContextProvider from './taskContext';

function App() {

  // const [state, setstate] = useState([
  //   {key: 1, title:"1 state"},
  //   {key: 2, title:"2 state"},
  //   {key: 3, title:"3 state"},
  // ])
  // const addTask= (data) =>{
  // setstate([...state, {key:state.length +1, title:data}])
  // }
  return (
    <div className="App">
      {/* <InputField addTask={addTask} />
      <TaskContextProvider >
      
        <List state={state} />
      </TaskContextProvider> */}
     <Header />
     <Content />
    </div>
  );
}

export default App;
