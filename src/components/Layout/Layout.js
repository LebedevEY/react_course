import styles from "./layout.css";

export function Layout({ header, chats, children }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>{header}</div>

      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{children}</div>
      </div>
    </div>
  );
}
