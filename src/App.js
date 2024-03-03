import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import { useState } from 'react';
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
                <Header />
                <main>
                    <AddTask tasks={tasks} setTasks={setTasks} />
                    <TaskList tasks={tasks} setTasks={setTasks} />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App