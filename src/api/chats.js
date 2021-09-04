import { db } from "./firebase";

export const getChatsApi = () => db.ref("chats").get();

export const handleChangeMessageApi = (roomId, messageValue) =>
  db.ref("chats").child(roomId).set({ title: roomId, value: messageValue });

export const clearMessageValueApi = (roomId) =>
  db.ref("chats").child(roomId).update({ title: roomId, value: "" });

export const addNewChatApi = (chat) =>
  db.ref("chats").child(chat.title).set(chat);
