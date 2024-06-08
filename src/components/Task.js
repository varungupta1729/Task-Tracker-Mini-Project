import React from 'react'


const Task = ({task ,onDelete , onToggle}) => {
  return (
    <div className= {`task  ${task.reminder ? 'reminder' :''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.text} <i class="bi bi-trash" onClick={()=>onDelete(task.id)}></i></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
