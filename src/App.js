import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import './App.css';
import { useState } from 'react'

// let name = "Sam"

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
            {/* <Navbar title={obj.title} aboutText={obj.aboutText}/> */}
            <Navbar mode={mode} toggleMode={toggleMode} modeText={themeText}/>
            <Textform heading={obj.title} mode={mode}/>
            {/* <About /> */}
        </>
    );
}

export default App;
