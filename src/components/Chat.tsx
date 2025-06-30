"use client";
import { messages_bot } from "@/data/messages";
import avatarBot from "@/assets/avatarBot.png";
import { useState } from "react";
import ChatHistory from "./ChatHistory";
import send from "@/assets/send.svg";
import { Conversation, Message, Option } from "@/types/message";
import { useConversationsChat } from "@/context/ConversationsChatContext";

export default function Chat() {
  const [message2, setMessage2] = useState<string>("");
  const [menssages, setMenssages] = useState<Message[]>([]);
  const {
    conversationsChats,
    setConversationsChats,
    selectedChat,
    setSelectedChat,
  } = useConversationsChat();

  const handleSendMessage = (message: string, idNextMessage: number) => {
    const newMessage: Message = {
      message,
      type: "text",
      sender: "user",
    };
    setMessage2("");
    const updatedMessages = [...(selectedChat ?? []), newMessage];
    const nextMessage = messages_bot.find((msg) => msg.id === idNextMessage);
    if (nextMessage) {
      setSelectedChat([...updatedMessages, nextMessage]);
      setConversationsChats(
        conversationsChats.map((chat: Conversation) =>
          chat.id === conversationsChats.length
            ? { ...chat, messages: [...chat.messages, newMessage, nextMessage] }
            : chat,
        ),
      );
    } else {
      setSelectedChat(updatedMessages);
      setConversationsChats(
        conversationsChats.map((chat: Conversation) =>
          chat.id === conversationsChats.length
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat,
        ),
      );
    }
  };

  const newConversation = () => {
    const newConversation: Conversation = {
      id: conversationsChats.length + 1,
      title: "New Conversation",
      messages: messages_bot.filter((msg) => msg.type === "welcome"),
    };

    setConversationsChats([...conversationsChats, newConversation]);
    setSelectedChat(messages_bot.filter((msg) => msg.type === "welcome"));
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 gap-2">
      <div className="md:bg-gray-900 shadow-md rounded-lg w-full max-w-4xl flex flex-row md:p-4 gap-4 h-[80vh] md:mt-10">
        <ChatHistory />
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center mb-4 bg-gray-800 p-2 rounded-lg">
            <img
              src={avatarBot.src}
              alt="Chat Bot Icon"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <p className="text-lg font-semibold text-white">Sofia Bot</p>
          </div>
          <div
            id="chat-box"
            className="bg-gray-800 p-4 rounded-lg overflow-y-auto flex flex-col gap-4 h-full screen min-w-72"
          >
            {(!selectedChat || selectedChat.length === 0) && (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-gray-400 text-lg">
                  Start a conversation with Sofia Bot!
                </p>
                <button
                  onClick={newConversation}
                  className="mt-4 bg-blue-600 text-white p-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  New Conversation
                </button>
              </div>
            )}
            {(selectedChat ?? []).map((message, index) =>
              message.sender === "bot" ? (
                <div
                  id="messages_container-bot"
                  className="flex flex-row gap-2"
                  key={index}
                >
                  <div className="bg-gray-700 text-white p-2 rounded-2xl flex flex-col gap-2 text-sm w-[95%]">
                    <div className="rounded-full bg-gray-700 flex flex-row items-center gap-2">
                      <img
                        src={avatarBot.src}
                        alt="Bot Avatar"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-lg font-semibold text-white">
                        Sofia Bot
                      </p>
                    </div>
                    <p className="mb-2">
                      {index === menssages.length - 1 &&
                      message.sender === "bot"
                        ? message2
                        : message.message}
                    </p>
                    <div className="flex flex-col gap-2 justify-end">
                      {message.options?.map(
                        (option: Option, optionIndex: number) => (
                          <button
                            key={optionIndex}
                            onClick={() => {
                              handleSendMessage(
                                option.text,
                                option.idNextMessage || 0,
                              );
                              setMenssages((prevMessages) =>
                                prevMessages.map((msg) =>
                                  msg.id === message.id
                                    ? { ...msg, selectedOptions: true }
                                    : msg,
                                ),
                              );
                            }}
                            className="text-white bg-blue-600 p-1 px-3 rounded-2xl transition-colors cursor-pointer hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            disabled={message.selectedOptions}
                          >
                            {option.text}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  id="messages_container-user"
                  className="flex flex-row gap-2 justify-end text-sm w-[90%] ml-auto"
                  key={index}
                >
                  <p className="bg-blue-600 text-white p-1 px-3 rounded-2xl">
                    {message.message}
                  </p>
                </div>
              ),
            )}
          </div>
          <div className="mt-4 flex flex-row gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className=" bg-blue-600 text-white p-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              <img src={send.src} alt="Send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
