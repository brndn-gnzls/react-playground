import { useState } from 'react'
import './App.css';

const App = () => {
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
            <div className="App">
                <h3>Task List</h3>
                <ul>
                    <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
                    {show && tasks.map((task) => (
                        <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                            <span>{task.id} - {task.name}</span>
                            <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App