import { ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
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

export function Chat({ title, selected, handleListItemClick }) {
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
        <h1>{title}</h1>
      </ListItemIcon>
    </ListItem>
  );
}
