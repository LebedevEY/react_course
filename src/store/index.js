import { createStore, combineReducers } from "redux";
import { chatReducer } from "./chats";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messagesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
