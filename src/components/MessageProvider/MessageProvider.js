import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export function MessageProvider({ children }) {
  const { roomID } = useParams();

  const [chats, setChats] = useState([
    { name: "Room_1", id: 1 },
    { name: "Room_2", id: 2 },
    { name: "Room_3", id: 3 },
  ]);

  const [messages, setMessages] = useState({
    Room_1: [{ message: "Hello!", author: "User" }],
    Room_2: [],
    Room_3: [],
  });

  const updateChats = useCallback(
    (value = "") => {
      setChats((chats) =>
        chats.map((chat) => {
          return chat.id === roomID ? { ...chat, value } : chat;
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
      value: chats.find((chat) => chat.id === roomID)?.value || "",
      hasRoomById: Object.keys(messages).some((room) => room === roomID),
    };
  }, [chats, messages, roomID]);

  const actions = useMemo(() => {
    return {
      sendMessage: (message) => {
        const newMessage = { ...message, author: "User", date: new Date() };

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
  return children([state, actions]);
}
