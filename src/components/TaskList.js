import React, { useState } from 'react'
import TaskCard from './TaskCard'
import BoxCard from './BoxCard'
import './TaskList.css'

function TaskList(props) {
    const [show, setShow] = useState(true)

    const [tasks, setTasks] = useState([
        {
            id: 1478,
            name: "Lorem Ipsum",
            completed: true
        },
        {
            id: 2109,
            name: "Dolor Nurit",
            completed: false
        },
        {
            id: 3756,
            name: "Solfit Preceptum",
            completed: true
        },
    ])

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <section className='tasklist'>
            <ul>
                <div className='header'>
                    <h3>{props.title}</h3>
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