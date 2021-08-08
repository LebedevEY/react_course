import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import styles from "./ChatList.css";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function ChatList() {
  const [chats] = useState([
    { name: "Room 1", id: 1 },
    { name: "Room 2", id: 2 },
    { name: "Room 3", id: 3 },
  ]);

  const s = useStyles();

  return (
    <List className={"chat_list"}>
      {chats.map((chat) => (
        <ListItem className={s.item} button={true} key={chat.id}>
          <ListItemIcon>
            <AccountCircle fontSize="large" className={styles.icon} />
          </ListItemIcon>
          <a href={"#"}>{chat.name}</a>
        </ListItem>
      ))}
    </List>
  );
}
