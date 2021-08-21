import { SEND_MESSAGE, ADD_NEW_MESSAGE_LIST } from "./types";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
});

export const addNewMessageList = (roomId) => ({
  type: ADD_NEW_MESSAGE_LIST,
  payload: roomId,
});
