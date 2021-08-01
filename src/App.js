import './App.css';
import {useEffect, useState} from "react";

export function App() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("")

    useEffect(() => {
        setTimeout(() => {
            if (messageList.length !== 0 && messageList[messageList.length - 1].author === "User") {
                setMessageList(state => [...state, {value: "Message delivered!", author: "Bot"}]);
            }
        }, 1500);
    }, [messageList]);


    return (
        <div className="App">
            <ul className="message_list">
                {messageList.map(message => <li><span>{message.author}</span>: {message.value}</li>)}
            </ul>
            <div className="input_form">
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
                <button onClick={() => {
                    setMessageList(state => [...state, {value, author: "User"}]);
                    setValue("");
                }}>Send
                </button>
            </div>
        </div>
    );
}