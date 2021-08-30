import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {
  getChatsApi,
  handleChangeMessageApi,
  addNewChatApi,
} from "../api/chats";
import {
  getMessagesApi,
  sendMessageApi,
  addNewMessageListApi,
} from "../api/messages";
import { chatsReducer } from "./chats";
import { gistsReducer } from "./gists/";
import { messagesReducer } from "./messages";
import { botSendMessage } from "./middlewares";
import { profileReducer } from "./profile";

const persistConfig = {
  key: "root",
  storage,
};

const persistreducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  }),
);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      botSendMessage,
      thunk.withExtraArgument({
        getChatsApi,
        getMessagesApi,
        sendMessageApi,
        handleChangeMessageApi,
        addNewChatApi,
        addNewMessageListApi,
      }),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
);

export const persistor = persistStore(store);
