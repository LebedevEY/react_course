import { useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  Header,
  MessageProvider,
  ChatList,
  MessageList,
  Layout,
} from "../components";

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

  return (
    <Switch>
      <Route path={["/chat/:roomID", "/chat"]}>
        <MessageProvider>
          {([state, actions]) => (
            <Layout header={<Header />} chats={<ChatList {...state} />}>
              {state.hasRoomById ? (
                <Route path="/chat/:roomId">
                  <MessageList {...state} {...actions} />
                </Route>
              ) : (
                <Redirect to="/chat" />
              )}
            </Layout>
          )}
        </MessageProvider>
      </Route>
    </Switch>
  );
}
