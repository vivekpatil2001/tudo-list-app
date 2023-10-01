import React from 'react'
import "./Task.css"

const Task = ( {id, title, description, priority} ) => {
  return (
    <div className='task-container'>
       <h1 className='task-title'>{title}</h1>
       <p className='task-description'>{description}</p>
        <p className='task-priority'>🎯{priority}</p>
    </div>
  )
}

export default Task
