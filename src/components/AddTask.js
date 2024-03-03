import React, { useState } from 'react'
import './AddTask.css'

const AddTask = () => {
    const [taskValue, setTaskValue] = useState("")
    const [progressValue, setProgressValue] = useState(false)

    const handleChange = (event) => {
        setTaskValue(event.target.value)
    }

    const handleReset = () => {
        setTaskValue("")
        setProgressValue(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progressValue)
        }

        console.log(task)
        handleReset()
    }

    const handleProgress = (event) => {
        setProgressValue(event.target.value)
    }

    return (
        <section className='addtask'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue}/>
                <select onChange={handleProgress} value={progressValue}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <span onClick={handleReset} className='reset'>Reset</span>
                <button type='submit'>Add Task</button>

            </form>
            <p>{taskValue}</p>
        </section>
    )
}

export default AddTask