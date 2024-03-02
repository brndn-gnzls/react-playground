import React, { useState } from 'react'
import TaskCard from './TaskCard'
import BoxCard from './BoxCard'

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
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <ul>
                <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
            <BoxCard result="success">
                <p className='title'>Lorem ipsum dolor sit amet.</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eligendi!</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className='title'>Lorem ipsum dolor sit amet.</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eligendi!</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className='title'>Lorem ipsum dolor sit amet.</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eligendi!</p>
            </BoxCard>
        </section>
    )
}

export default TaskList