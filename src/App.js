import { useState } from 'react'
import './App.css';

const App = () => {
    let [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <div className="App">
                <div className='box'>
                    <p>{count}</p>
                    <button className="add" onClick={handleIncrement}>ADD</button>
                    <button className="sub" onClick={handleDecrement}>SUB</button>
                    <button className="res" onClick={handleReset}>RESET</button>
                </div>
            </div>
        </>
    )
}

export default App