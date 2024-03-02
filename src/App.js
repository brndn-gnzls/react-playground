import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const info = "Lorem ipsum dolor."

    return (
        <>
            <div className="App">
                <Header/>
                <TaskList title={"Task List"} subtitle={"Track your day"} info={info}/>
            </div>
        </>
    )
}

export default App