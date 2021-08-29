import { clearMessageValue } from "../chats";
import { sendMessage, addNewMessageList } from "./actions";
import { GET_MESSAGES } from "./types";

export const sendMessageWithThunk =
  (message, roomId) =>
  async (dispatch, _, { sendMessageApi }) => {
    try {
      await sendMessageApi(roomId, message);

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

export const addNewMessageListFB =
  (roomId) =>
  async (dispatch, _, { addMessageListApi }) => {
    await addMessageListApi(roomId);
    dispatch(addNewMessageList(roomId));
  };
