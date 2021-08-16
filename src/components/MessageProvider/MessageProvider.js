import { useCallback, useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function MessageProvider({ children }) {
  const { roomID } = useParams();

  const [chats, setChats] = useState([
    { name: "room1", value: "" },
    { name: "room2", value: "" },
  ]);

  const [messages, setMessages] = useState({
    room1: [],
    room2: [],
  });

  const updateChats = useCallback(
    (value = "") => {
      setChats((chats) =>
        chats.map((chat) => {
          return chat.name === roomID ? { ...chat, value } : chat;
        }),
      );
    },
    [roomID],
  );

  const state = useMemo(() => {
    return {
      chats,
      allMessages: messages,
      messages: messages[roomID] || [],
      value: chats.find((chat) => chat.name === roomID)?.value || "",
      hasRoomById: Object.keys(messages).some((room) => room === roomID),
    };
  }, [chats, messages, roomID]);

  const actions = useMemo(() => {
    return {
      sendMessage: (message) => {
        const newMessage = { ...message, date: new Date() };

        setMessages((messages) => {
          return {
            ...messages,
            [roomID]: [...(messages[roomID] || []), newMessage],
          };
        });

        updateChats();
      },

      handleChangeValue: (e) => {
        const { value } = e.target;
        updateChats(value);
      },
    };
  }, [roomID, updateChats]);

  useEffect(() => {
    if (messages[roomID] !== undefined) {
      let timerID = null;
      const lastMessage = messages[roomID][messages[roomID].length - 1];

      if (lastMessage?.author === "User") {
        timerID = setTimeout(
          () =>
            actions.sendMessage({
              message: `Hello from bot to ${roomID}`,
              author: "Bot",
            }),
          500,
        );
      }

      return () => clearInterval(timerID);
    }
  }, [messages, roomID, actions]);

  return children([state, actions]);
}
