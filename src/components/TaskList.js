import React, { useState } from 'react'
import TaskCard from './TaskCard'
import BoxCard from './BoxCard'
import './TaskList.css'

function TaskList({tasks, setTasks}) {
    const [show, setShow] = useState(true)

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <section className='tasklist'>
            <ul>
                <div className='header'>
                    <h3>Task List</h3>
                    <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hide Tasks" : "Show Tasks"}</button>
                </div>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
        </section>
    )
}

export default TaskList