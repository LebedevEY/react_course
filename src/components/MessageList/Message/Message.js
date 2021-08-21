import classNames from "classnames";
import { format } from "date-fns";
import styles from "./message.module.css";

export function Message({ author, message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{message}</h3>
      <p>{author}</p>
      <p>{format(new Date(), "HH:mm, dd.MM")}</p>
    </div>
  );
}
