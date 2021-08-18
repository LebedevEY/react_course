import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CLEAR_MESSAGE_VALUE,
  ADD_NEW_CHAT,
} from "./types";

export const addNewChat = (value, roomId, hasChat) => {
  return {
    type: hasChat ? null : ADD_NEW_CHAT,
    payload: { value, roomId },
  };
};

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
});
