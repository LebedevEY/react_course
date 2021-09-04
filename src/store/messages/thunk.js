import debounce from "lodash.debounce";
import { clearMessageValue } from "../chats";
import { sendMessage, addNewMessageList } from "./actions";
import { GET_MESSAGES } from "./types";

export const sendMessageWithThunk =
  (message, roomId) =>
  async (dispatch, _, { sendMessageApi, clearMessageValueApi }) => {
    try {
      await sendMessageApi(roomId, message);
      await clearMessageValueApi(roomId);

      dispatch(sendMessage(message, roomId));
      dispatch(clearMessageValue(roomId));
    } catch (err) {
      console.log("error:", err);
    }
  };

export const getMessagesFB =
  () =>
  (dispatch, _, { getMessagesApi }) => {
    getMessagesApi().then((snapshot) => {
      const messages = {};

      snapshot.forEach((snap) => {
        messages[snap.key] = Object.values(snap.val());
      });

      dispatch({ type: GET_MESSAGES, payload: messages });
    });
  };

const cb = debounce(async (addMessageList) => {
  try {
    await addMessageList();
  } catch (err) {
    console.log("ERROR", err);
  }
}, 500);

export const addNewMessageListFB =
  (roomId) =>
  async (dispatch, _, { addNewMessageListApi }) => {
    await cb(() => addNewMessageListApi(roomId));
    dispatch(addNewMessageList(roomId));
  };
