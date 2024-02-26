import logo from './logo.svg';
import Navbar from './components/Navbar';
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
        </>
    );
}

export default App;
