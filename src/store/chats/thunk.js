import debounce from "lodash.debounce";
import { addNewChat, handleChangeMessageValue } from "./actions";
import { GET_CHATS } from "./types";

export const getChatsFB =
  () =>
  async (dispatch, _, { getChatsApi }) => {
    try {
      await getChatsApi().then((snapshot) => {
        const chats = [];

        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        dispatch({ type: GET_CHATS, payload: chats });
      });
    } catch (err) {
      console.log("ERROR", err);
    }
  };

const cb = debounce(async (handleChangeMessage) => {
  try {
    await handleChangeMessage();
  } catch (err) {
    console.log("ERROR:", err);
  }
}, 500);

export const handleChangeMessageValueFB =
  (messageValue, roomId) =>
  async (dispatch, _, { handleChangeMessageApi }) => {
    await cb(() => handleChangeMessageApi(roomId, messageValue));

    dispatch(handleChangeMessageValue(messageValue, roomId));
  };

export const addNewChatFB =
  (chat) =>
  async (dispatch, _, { addNewChatApi }) => {
    await addNewChatApi(chat);

    dispatch(addNewChat(chat));
  };
