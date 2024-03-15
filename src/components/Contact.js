import { useNavigate } from 'react-router-dom'
import React from 'react'

const Contact = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        return navigate("/")
    }

    return (
        <>
            <div className='component'>Contact</div>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Contact