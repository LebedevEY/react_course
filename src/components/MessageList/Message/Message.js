import classNames from "classnames";
import styles from "./message.module.css";

export function Message({ author, message }) {
  const date = new Date();
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{message}</h3>
      <p>{author}</p>
      <p>
        {date.getHours()}:{date.getMinutes()}
      </p>
    </div>
  );
}
