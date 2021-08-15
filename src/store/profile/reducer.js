import { TOGGLE_NAME_VISIBLE } from "./types";
const initialState = {
  user: {
    firstName: "User 1",
    age: 25,
    sex: "male",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME_VISIBLE:
      return {
        ...state,
        nameVisible: !state.nameVisible,
      };
    default:
      return state;
  }
};
