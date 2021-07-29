import './App.css';

export function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>{props.text}</h1>
            </header>
        </div>
    );
}

export function Message(props) {
    return (
        <p className="Message">{props.message}</p>
    );
}