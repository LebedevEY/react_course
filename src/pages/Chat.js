import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import { ChatList, MessageList, Layout } from "../components";
import { getChatsFB } from "../store/chats";
import { getMessagesFB } from "../store/messages";

export function Chat() {
  const { push } = useHistory();

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat");
      }
    };

    document.addEventListener("keydown", listenExistChat);

    return () => {
      document.removeEventListener("keydown", listenExistChat);
    };
  }, [push]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatsFB());
    dispatch(getMessagesFB());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <Layout chats={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>
        </Layout>
      </Route>
    </Switch>
  );
}
