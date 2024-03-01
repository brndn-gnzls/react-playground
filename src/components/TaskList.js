import React, { useState } from 'react'
import TaskCard from './TaskCard'

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
        <>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <ul>
                <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
        </>
    )
}

export default TaskList