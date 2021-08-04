import './App.css';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {Button} from '@material-ui/core';
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
    }, [messageList])


    const handleSendMessage = () => {
        setMessageList(state => [...state, {value, author: "User"}]);
        setValue("");
    }

    const handleKeySendMessage = ({code}) => {
        if (code === "Enter") {
            setMessageList(state => [...state, {value, author: "User"}]);
            setValue("");
        }
    }

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <div className="App">
            <ul className="message_list">
                {messageList.map(message => <li><span>{message.author}</span>: {message.value}</li>)}
            </ul>
            <div className="input_form">
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)}
                       onKeyPress={handleKeySendMessage}/>
                <Button variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        onClick={handleSendMessage}>Send
                </Button>
            </div>
        </div>
    );
}