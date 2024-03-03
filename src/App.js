import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
    return (
        <>
            <div className="App">
                <Header/>
                <AddTask/>
                <TaskList title={"Task List"} subtitle={"Track your day"}/>
                <Footer/>
            </div>
        </>
    )
}

export default App