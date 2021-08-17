import { HANDLE_CHANGE_MESSAGE_VALUE, CLEAR_MESSAGE_VALUE } from "./types";

export const handleChangeMessageValue = (value, roomID) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomID },
});

export const clearMessageValue = (roomID) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomID,
});
