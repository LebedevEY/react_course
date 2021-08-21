import { SEND_MESSAGE, ADD_NEW_MESSAGE_LIST } from "./types";

const initialState = {
  messages: {
    room1: [],
    room2: [],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message },
          ],
        },
      };
    case ADD_NEW_MESSAGE_LIST:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.name]: [],
        },
      };
    default:
      return state;
  }
};
