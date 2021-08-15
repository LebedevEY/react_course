import { Button, Input, Icon } from "@material-ui/core";
import { useRef } from "react";
import { Message } from "./Message";
import styles from "./messageList.module.css";

export const MessageList = ({
  messages,
  value,
  handleChangeValue,
  sendMessage,
}) => {
  const ref = useRef();

  const handleSendMessage = () => {
    if (value) {
      sendMessage({ author: "User", message: value });
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div ref={ref}>
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>
      <div className={styles.input}>
        <Input
          value={value}
          onChange={handleChangeValue}
          onKeyPress={handlePressInput}
          fullWidth={true}
          autoFocus={true}
          placeholder="Введите сообщение..."
        />
        <Button
          onClick={handleSendMessage}
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </div>
    </>
  );
};
