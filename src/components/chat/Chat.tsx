"use client";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import avatarBot from "@/assets/images/avatar-bot.png";
import send from "@/assets/icons/send.svg";
import { messages_bot } from "@/data/messages";
import { useConversationsChat } from "@/context/conversationsChatContext";
import ChatHistory from "./ChatHistory";
import chatCompletion from "@/utils/chatCompletion";
import { Conversation, Message } from "@/types/message";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function Chat() {
  const {
    conversationsChats,
    setConversationsChats,
    selectedChat,
    setSelectedChat,
  } = useConversationsChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messageSender, setMessageSender] = useState<string>("");

  useEffect(() => {
    messagesEndRef.current?.scrollTo({
      top: messagesEndRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [selectedChat]);

  const appendMessages = (newMsgs: Message[]) => {
    setSelectedChat([...(selectedChat ?? []), ...newMsgs]);
    setConversationsChats(
      conversationsChats.map((chat: Conversation) =>
        chat.id === conversationsChats.length
          ? { ...chat, messages: [...chat.messages, ...newMsgs] }
          : chat,
      ),
    );
  };

  const handleSendOption = (text: string, nextId: number) => {
    const newMsg: Message = { message: text, type: "text", sender: "user" };
    const nextMsg = messages_bot.find((m) => m.id === nextId);

    const updated = (selectedChat ?? []).map((msg, idx, arr) =>
      msg.sender === "bot" &&
        msg.options &&
        !msg.selectedOptions &&
        idx === arr.length - 1
        ? { ...msg, selectedOptions: true }
        : msg,
    );

    setSelectedChat([...updated, newMsg, ...(nextMsg ? [nextMsg] : [])]);

    setConversationsChats(
      conversationsChats.map((chat: Conversation) =>
        chat.id === conversationsChats.length
          ? {
            ...chat,
            messages: [
              ...chat.messages,
              newMsg,
              ...(nextMsg ? [nextMsg] : []),
            ],
          }
          : chat,
      ),
    );
  };

  const handleNewConversation = () => {
    const welcomeMsgs = messages_bot.filter((msg) => msg.type === "welcome");
    const newConv: Conversation = {
      id: conversationsChats.length + 1,
      title: "New Conversation",
      messages: welcomeMsgs,
    };

    setConversationsChats([...conversationsChats, newConv]);
    setSelectedChat(welcomeMsgs);
  };

  const handleSendUserMessage = async () => {

    appendMessages([
      { message: messageSender, type: "text", sender: "user" },
      { message: "Escrevendo...", type: "text", sender: "bot" },
    ]);

    const response = await chatCompletion("user", messageSender);

    setSelectedChat([
      ...(selectedChat ?? []).filter(
        (msg: Message) => msg.message !== "Escrevendo...",
      ),
      { message: messageSender, type: "text", sender: "user" },
      { message: response, type: "text", sender: "bot" },
    ]);

    setConversationsChats(
      conversationsChats.map((chat: Conversation) =>
        chat.id === conversationsChats.length
          ? {
            ...chat,
            messages: [
              ...chat.messages,
              { message: messageSender, type: "text", sender: "user" },
              { message: response, type: "text", sender: "bot" },
            ],
          }
          : chat,
      ),
    );
    setMessageSender("");
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 gap-2">
      <div className="dark:md:bg-gray-900 md:bg-gray-400 md:shadow-md rounded-lg w-full max-w-4xl flex flex-row md:p-4 gap-4 h-[80vh] md:mt-10">
        <ChatHistory />
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center mb-4 dark:bg-gray-800 bg-gray-300 p-2 rounded-lg">
            <img
              src={avatarBot.src}
              alt="Chat Bot Icon"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <p className="text-lg font-semibold dark:text-white text-black">
              Sofia Bot
            </p>
          </div>

          <div
            id="chat-box"
            ref={messagesEndRef}
            className="dark:bg-gray-800 bg-gray-300 p-4 rounded-lg overflow-y-auto flex flex-col gap-4 h-full screen min-w-72"
          >
            {!selectedChat?.length ? (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="dark:text-gray-400 text-gray-950 text-lg">
                  Start a conversation with Sofia Bot!
                </p>
                <button
                  onClick={handleNewConversation}
                  className="mt-4 bg-blue-600 text-white p-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  New Conversation
                </button>
              </div>
            ) : (
              selectedChat.map((message, index) =>
                message.sender === "bot" ? (
                  <div key={index} className="flex gap-2">
                    <div className="dark:bg-gray-700 bg-gray-50 dark:text-white text-black p-2 rounded-2xl flex flex-col gap-2 text-sm w-[95%]">
                      <div className="flex items-center gap-2">
                        <img
                          src={avatarBot.src}
                          className="w-9 h-9 rounded-full"
                        />
                        <p className="text-lg font-semibold">Sofia Bot</p>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(message.message),
                        }}
                      />
                      <div className="flex flex-col gap-2">
                        {message.options?.map((option, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              handleSendOption(
                                option.text,
                                option.idNextMessage || 0,
                              )
                            }
                            disabled={message.selectedOptions}
                            className="bg-blue-600 text-white p-1 px-3 rounded-2xl hover:bg-blue-700 disabled:bg-gray-500"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex justify-end text-sm w-[90%] ml-auto"
                  >
                    <p className="bg-blue-600 text-white p-1 px-3 rounded-2xl">
                      {message.message}
                    </p>
                  </div>
                ),
              )
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <Input
              placeholder="Pergunte algo para Sofia Bot..."
              className="w-full"
              value={messageSender}
              onChange={(e) => setMessageSender(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendUserMessage()}
            />
            <Button onClick={handleSendUserMessage} className="flex items-center">
              <img src={send.src} alt="Send" className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
