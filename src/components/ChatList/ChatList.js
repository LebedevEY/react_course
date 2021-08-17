import { List } from "@material-ui/core";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./Chat";

const selector = (state) => {
  return state.chats.chats;
};

export const ChatList = memo(() => {
  const { roomID } = useParams();
  const chats = useSelector(selector);

  return (
    <List component="nav">
      {chats.map((chat, index) => {
        return (
          <Link key={index} to={`/chat/${chat.name}`}>
            <Chat name={chat.name} selected={roomID === chat.name} />
          </Link>
        );
      })}
    </List>
  );
});
