import classNames from "classnames";
import styles from "./message.css";

export function Message({ author, message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{message}</h3>
      <p>{author}</p>
    </div>
  );
}
