import { SEND_MESSAGE } from "./types";

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
          [action.payload.roomID]: [
            ...state.messages[action.payload.roomID],
            { ...action.payload.messages },
          ],
        },
      };
    default:
      return state;
  }
};
