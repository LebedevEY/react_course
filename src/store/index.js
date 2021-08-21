import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { chatsReducer } from "./chats";
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
  }),
);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(botSendMessage),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
);

export const persistor = persistStore(store);
