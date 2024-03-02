import React from 'react'
import './TaskCard.css'

const TaskCard = ({ task, handleDelete }) => {
    return (
        <div className='taskcard'>
            <li className={`${task.completed ? "completed" : "incomplete"}`}>
                <span>{task.id} - {task.name}</span>
                <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        </div>
    )
}

export default TaskCard