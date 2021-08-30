import { SEND_MESSAGE, ADD_MESSAGE_LIST } from "./types";

const initialState = {
  messages: {},
};

export const messagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] || []),
            { ...action.payload.message, id: action.payload.roomId },
          ],
        },
      };
    case ADD_MESSAGE_LIST:
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
