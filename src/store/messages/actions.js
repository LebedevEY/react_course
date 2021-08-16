import { SEND_MESSAGE } from "./types";

export const sendMessage = (message, roomID) => ({
  type: SEND_MESSAGE,
  payload: { message, roomID },
});
