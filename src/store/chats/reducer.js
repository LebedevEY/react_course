import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CLEAR_MESSAGE_VALUE,
  ADD_NEW_CHAT,
} from "./types";

const initialState = {
  chats: [
    { name: "room1", value: "" },
    { name: "room2", value: "" },
  ],
};

const updateChats = (state, roomId, value) =>
  state.chats.map((chat) => {
    return chat.name === roomId ? { ...chat, value } : chat;
  });

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        chats: updateChats(state, action.payload.roomId, action.payload.value),
      };
    case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        chats: updateChats(state, action.payload, ""),
      };
    case ADD_NEW_CHAT:
      return {
        ...state,
        chats: updateChats(state, action.payload.roomId, action.payload.value),
      };
    default:
      return state;
  }
};
