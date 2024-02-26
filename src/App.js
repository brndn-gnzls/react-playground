import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';

let name = "Sam"

const obj = {
    title: "Practice Project",
    aboutText: "About Us"
}

function App() {
    return (
        <>
            {/* <Navbar title={obj.title} aboutText={obj.aboutText}/> */}
            <Navbar />
            <Textform heading={obj.title}/>
        </>
    );
}

export default App;
