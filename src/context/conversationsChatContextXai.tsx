"use client";

import { Conversation, Message } from "@/types/message";
import { storage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

interface ConversationsChatContextType {
  conversationsChats: Conversation[];
  setConversationsChats: (chats: Conversation[]) => void;
  selectedChat: Message[] | null;
  setSelectedChat: (chat: Message[] | null) => void;
}

const ConversationsChatContext = createContext<
  ConversationsChatContextType | undefined
>(undefined);

interface ConversationsChatProviderProps {
  children: React.ReactNode;
}

export function ConversationsChatProvider({
  children,
}: ConversationsChatProviderProps) {
  const [conversationsChats, setConversationsChatsState] = useState<
    Conversation[]
  >([]);
  const [selectedChat, setSelectedChatState] = useState<Message[] | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const storedChats = storage.getItem("conversationsChats");

    if (storedChats) setConversationsChatsState(JSON.parse(storedChats));
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      storage.setItem("conversationsChats", JSON.stringify(conversationsChats));
    }
  }, [conversationsChats, isClient]);

  useEffect(() => {
    if (isClient) {
      storage.setItem("selectedChat", JSON.stringify(selectedChat));
    }
  }, [selectedChat, isClient]);

  const setConversationsChats = (chats: Conversation[]) => {
    setConversationsChatsState(chats);
  };

  const setSelectedChat = (chat: Message[] | null) => {
    setSelectedChatState(chat);
  };

  return (
    <ConversationsChatContext.Provider
      value={{
        conversationsChats,
        setConversationsChats,
        selectedChat,
        setSelectedChat,
      }}
    >
      {children}
    </ConversationsChatContext.Provider>
  );
}

export function useConversationsChatXai() {
  const context = useContext(ConversationsChatContext);
  if (!context) {
    throw new Error(
      "useConversationsChat must be used within a ConversationsChatProvider",
    );
  }
  return context;
}
