import React, { useState, useRef } from 'react'
import './AddTask.css'

const AddTask = ({tasks, setTasks}) => {
    const [progressValue, setProgressValue] = useState(false)

    const taskRef = useRef("")

    const handleReset = () => {
        taskRef.current.value = ""
        setProgressValue(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value,
            completed: Boolean(progressValue)
        }
        // Set tasks with previous information ([...tasks, ])
        // and new information ([ , task])
        setTasks([...tasks, task])
        handleReset()
    }

    const handleProgress = (event) => {
        setProgressValue(event.target.value)
    }

    return (
        <section className='addtask'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='task' id='task' placeholder='Task Name' autoComplete='off' ref={taskRef}/>
                <select onChange={handleProgress} value={progressValue}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <span onClick={handleReset} className='reset'>Reset</span>
                <button type='submit'>Add Task</button>

            </form>
        </section>
    )
}

export default AddTask