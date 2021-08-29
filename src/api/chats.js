import { db } from "./firebase";

export const getChatsApi = () => db.ref("chats").get();

export const addChatApi = (roomId) =>
  db.ref("chats").push({ title: roomId, value: "" });

export const handleChangeMessageApi = (roomId, messageValue) =>
  db.ref("chats").update({ title: roomId, value: messageValue });
