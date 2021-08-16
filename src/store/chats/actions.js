import { CHANGE_MESSAGE_VALUE, CLEAR_MESSAGE_VALUE } from "./types";

export const changeMessageValue = (value, roomID) => ({
  type: CHANGE_MESSAGE_VALUE,
  payload: { value, roomID },
});

export const clearMessageValue = (roomID) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomID,
});
