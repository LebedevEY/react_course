import { HANDLE_CHANGE_MESSAGE_VALUE, CLEAR_MESSAGE_VALUE } from "./types";

const initialState = {
  chats: [
    { name: "room1", value: "" },
    { name: "room2", value: "" },
  ],
};

const updateChats = (state, roomID, value) =>
  state.chats.map((chat) => {
    console.log(state.chats);
    return chat.name === roomID ? { ...chat, value } : chat;
  });

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        chats: updateChats(state, action.payload.roomID, action.payload.value),
      };
    case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        chats: updateChats(state, action.payload, ""),
      };
    default:
      return state;
  }
};
