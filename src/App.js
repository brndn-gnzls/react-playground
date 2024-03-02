import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <>
            <div className="App">
                <Header/>
                <TaskList title={"Task List"} subtitle={"Track your day"}/>
                <Footer/>
            </div>
        </>
    )
}

export default App