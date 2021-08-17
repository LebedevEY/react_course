import { ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { memo } from "react";
import styles from "./chat.module.css";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#aea7cf",
      },
    },
  };
});

function ChatView({ name, selected, handleListItemClick }) {
  const s = useStyles();

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon className={styles.chat}>
        <AccountCircle fontSize="large" className={styles.icon} />
        <h1>{name}</h1>
      </ListItemIcon>
    </ListItem>
  );
}

export const Chat = memo(ChatView);
