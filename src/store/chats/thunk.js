import debounce from "lodash.debounce";
import { handleChangeMessageValue, addNewChat } from "./actions";
import { GET_CHATS } from "./types";

export const getChatsFB =
  () =>
  (dispatch, _, { getChatsApi }) => {
    getChatsApi().then((snapshot) => {
      const chats = [];

      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      dispatch({ type: GET_CHATS, payload: chats });
    });
  };

const cb = debounce(async (handleChangeMessage) => {
  await handleChangeMessage();
}, 500);

export const handleChangeMessageValueFB =
  (messageValue, roomId) =>
  async (dispatch, _, { handleChangeMessageApi }) => {
    try {
      await cb(() => handleChangeMessageApi(roomId, messageValue));

      dispatch(handleChangeMessageValue(messageValue, roomId));
    } catch (err) {
      console.log("ERROR", err);
    }
  };
export const addChatFB =
  (roomId) =>
  (dispatch, _, { addChatApi }) => {
    addChatApi(roomId);
    dispatch(addNewChat(roomId));
  };
