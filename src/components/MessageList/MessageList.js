import { Button, Input, makeStyles, Icon } from "@material-ui/core";
import { Message } from "./Message";

const useStyles = makeStyles(() => {
  return {
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: " 15px",
    },
  };
});

export const MessageList = ({
  messages,
  value,
  sendMessage,
  handleChangeValue,
}) => {
  const s = useStyles();

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
      <div>
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>
      <Input
        className={s.input}
        value={value}
        onChange={handleChangeValue}
        onKeyPress={handlePressInput}
        fullWidth={true}
        autoFocus={true}
        placeholder="Введите сообщение..."
      />
      <Button
        variant="contained"
        color="primary"
        className={s.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </>
  );
};
