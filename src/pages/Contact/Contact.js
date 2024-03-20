import { useNavigate, Outlet } from 'react-router-dom'
import React from 'react'

export const Contact = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        return navigate("/")
    }

    return (
        <main>
            <div className='component'>Contact</div>
            <button onClick={handleSubmit}>Submit</button>
            <Outlet />
        </main>
    )
}
