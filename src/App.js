
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [showAddTask , setShowAddTask ] = useState(false)
  const [tasks ,setTask]= useState( [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Eating Food",
      "day": "Feb 6th at 5:30pm",
      "reminder": false
    }
  ])
//add task

const addTask = (task) =>{

  const id = Math.floor(Math.random()*10000) +1
  const newTask ={id, ...task}
  setTask([...tasks , newTask])

}
  // deleting the task

  const deleteTask = (id)=>{
    setTask(tasks.filter((task)=>task.id!==id))
  }

  //toggle on remainder

  const toggleReminder = (id) =>{
   setTask(tasks.map((task)=>task.id === id ?{...task , reminder :!task.reminder} : task))
  }

  return (
  <>
  <div className="container">
  < Header showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask )}/>
   { showAddTask && <AddTask  onAdd={addTask}  />}
  
  {tasks.length >0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder}/>) : "No Task"}
 
  </div>
  
  </>
  );
}

export default App;
