import "./App.css";
import { Button, Input } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { Header } from "./components";
import { ChatList } from "./components/ChatList/ChatList";

export function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author === "User"
      ) {
        setMessageList((state) => [
          ...state,
          { value: "Message delivered!", author: "Bot" },
        ]);
      }
    }, 500);
  }, [messageList]);

  const handleSendMessage = () => {
    setMessageList((state) => [...state, { value, author: "User" }]);
    setValue("");
  };

  const handleKeySendMessage = ({ code }) => {
    if (code === "Enter") {
      console.log();
      setMessageList((state) => [...state, { value, author: "User" }]);
      setValue("");
    }
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className="App">
        <Header />
        <div className={"chat_box"}>
          <ChatList />
          <div className={"chat"}>
            <ul className="message_list">
              {messageList.map((message, index) => (
                <li key={index}>
                  <span className={"author"}>{message.author}</span>:{" "}
                  {message.value}
                </li>
              ))}
            </ul>
            <div className="input_form">
              <Input
                className={"input"}
                autoFocus={true}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyPress={handleKeySendMessage}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
