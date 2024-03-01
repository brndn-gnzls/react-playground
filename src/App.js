import { useState } from 'react'
import './App.css';

const App = () => {
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

    return (
        <>
            <div className="App">
                <h3>Task List</h3>
                <ul>
                    { tasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.id} - {task.name}</span>
                            <button className='delete'>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App