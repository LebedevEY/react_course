import { Button, Input, Icon } from "@material-ui/core";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { handleChangeMessageValueFB } from "../../store/chats";
import { sendMessageWithThunk } from "../../store/messages";
import { Message } from "./Message";
import styles from "./messageList.module.css";

export const MessageList = () => {
  const ref = useRef();

  const { roomId } = useParams();

  const dispatch = useDispatch();

  const messages = useSelector((state) => {
    return state.messages.messages[roomId] || [];
  });

  const value = useSelector((state) => {
    return state.chats.chats.find((chat) => chat.title === roomId)?.value || "";
  });

  const handleSendMessage = () => {
    if (value) {
      dispatch(
        sendMessageWithThunk({ author: "User", message: value }, roomId),
      );
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      handleSendMessage();
    }
  };

  // const handleScrollBottom = useCallback(() => {
  //   if (ref.current) {
  //     ref.current.scrollTo(0, ref.current.scrollHeight);
  //   }
  // }, [messages]);
  //
  // useEffect(() => {
  //   handleScrollBottom();
  // }, [handleScrollBottom]);
  //
  // const myLog = () => console.log(ref.current);

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
          onChange={(e) =>
            dispatch(handleChangeMessageValueFB(e.target.value, roomId))
          }
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
