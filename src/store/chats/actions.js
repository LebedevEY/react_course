import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CLEAR_MESSAGE_VALUE,
  ADD_NEW_CHAT,
} from "./types";

export const addNewChat = (chat) => ({
  type: ADD_NEW_CHAT,
  payload: chat,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
});
