import './App.css';

function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>{props.message}</h1>
            </header>
        </div>
    );
}

export default App;
