import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const obj = {
    title: "Practice Project",
    aboutText: "About Us"
}

function App() {
    const [mode, setMode] = useState('light')
    const [themeText, setThemeText] = useState("Enable Dark Mode")

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'grey'
            setThemeText("Enable Light Mode")
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            setThemeText("Enable Dark Mode")
        }
    }

    return (
        <>
            <Router>
                <Navbar mode={mode} toggleMode={toggleMode} modeText={themeText} />
                <div className='container my-3'>
                    <Routes>
                        <Route path="/" element={<Textform heading={obj.title} mode={mode} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
