import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter your text')

    const handleOnChange = (event) => {
        console.log("handleOnChange")
        setText(event.target.value)
    }

    const handleUpClick = () => {
        console.log("upperCaseClick")
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase = () => {
        console.log("lowerCaseClick")
        const newText = text.toLowerCase()
        setText(newText)
    }

    const handleClear = (event) => {
        console.log("handleClear")
        setText("")
    }

    return (
        <>
            <div>
                <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'} }>
                    <div className="form-floating">
                        <h1 className='my-3'>{props.heading}</h1>
                        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "200px" }}>
                        </textarea>
                        <input className="btn btn-primary my-3" onClick={handleUpClick} type="button" value="Uppercase" />
                        <input className="btn btn-primary my-3 mx-1" onClick={handleLowerCase} type="button" value="Lowercase" />
                        <button type="button" onClick={handleClear} className="btn btn-outline-danger">Clear</button>
                    </div>
                </div>
            </div>

            {/* Counting words and characters */}
            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'} }>
                <h3>Your text summary:</h3>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read.</p>
                <div>
                </div>

            </div>
        </>

    )
}
