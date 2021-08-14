import { List } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./Chat";

export const ChatList = ({ chats }) => {
  const { roomID } = useParams();

  return (
    <List component="nav">
      {chats.map((chat, index) => {
        return (
          <Link key={index} to={`/chat/${chat.name}`}>
            <Chat title={chat.name} selected={roomID === chat.name} />
          </Link>
        );
      })}
    </List>
  );
};
