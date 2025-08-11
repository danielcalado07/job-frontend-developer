"use client";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import avatarBot from "@/assets/images/avatar-bot.png";
import send from "@/assets/icons/send.svg";
import { messages_bot } from "@/data/messages";
import chatCompletionXai from "@/utils/chatCompletionxai";
import { Conversation, Message } from "@/types/message";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function Chatxai() {
  const [conversationsChats, setConversationsChatsState] = useState<
    Conversation[]
  >([]);
  const [selectedChat, setSelectedChatState] = useState<Message[] | null>(null);
  const setConversationsChats = (chats: Conversation[]) => {
    setConversationsChatsState(chats);
  };

  const setSelectedChat = (chat: Message[] | null) => {
    setSelectedChatState(chat);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputError, setInputError] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);

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
    const newUserMessage: Message = {
      message: text,
      type: "text",
      sender: "user",
    };
    const nextBotMessage = messages_bot.find((m) => m.id === nextId);

    const updatedChat = (selectedChat ?? []).map((msg, idx, arr) =>
      msg.sender === "bot" &&
      msg.options &&
      !msg.selectedOptions &&
      idx === arr.length - 1
        ? { ...msg, selectedOptions: true }
        : msg,
    );

    setSelectedChat([
      ...updatedChat,
      newUserMessage,
      ...(nextBotMessage ? [nextBotMessage] : []),
    ]);

    setConversationsChats(
      conversationsChats.map((chat: Conversation) =>
        chat.id === conversationsChats.length
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                newUserMessage,
                ...(nextBotMessage ? [nextBotMessage] : []),
              ],
            }
          : chat,
      ),
    );
  };

  const handleNewTraditionalConversation = () => {
    const welcomeMsgs = messages_bot.filter((msg) => msg.type === "welcome");
    const newConv: Conversation = {
      id: conversationsChats.length + 1,
      title: `Bot tradicional ${conversationsChats.length + 1}`,
      messages: welcomeMsgs,
    };

    setConversationsChats([...conversationsChats, newConv]);
    setSelectedChat(welcomeMsgs);
    setIsInputDisabled(true);
    setMessageInput("");
  };

  const handleNewAIConversation = () => {
    const welcomeMsgs = messages_bot.filter((msg) => msg.type === "welcome IA");
    const newConv: Conversation = {
      id: conversationsChats.length + 1,
      title: `Chat com IA ${conversationsChats.length + 1}`,
      messages: welcomeMsgs,
    };

    setConversationsChats([...conversationsChats, newConv]);
    setSelectedChat(welcomeMsgs);
    setIsInputDisabled(false);
    setMessageInput("");
  };

  const handleSendUserMessage = async () => {
    const text = messageInput.trim();
    setMessageInput("");

    if (!text) {
      setInputError("Campo obrigatório");
      return;
    } else {
      setInputError("");
      setIsInputDisabled(true);
    }

    appendMessages([
      { message: text, type: "text", sender: "user" },
      { message: "Bot está escrevendo...", type: "text", sender: "bot" },
    ]);

    const response = await chatCompletionXai("user", text);
    setIsInputDisabled(false);

    const updatedChatAfterAI = (selectedChat ?? []).filter(
      (msg: Message) => msg.message !== "Bot está escrevendo...",
    );

    setSelectedChat([
      ...updatedChatAfterAI,
      { message: text, type: "text", sender: "user" },
      { message: response, type: "text", sender: "bot" },
    ]);

    setConversationsChats(
      conversationsChats.map((chat: Conversation) =>
        chat.id === conversationsChats.length
          ? {
              ...chat,
              messages: [
                ...chat.messages.filter(
                  (msg) => msg.message !== "Escrevendo...",
                ), // Remove "typing" from stored messages
                { message: text, type: "text", sender: "user" },
                { message: response, type: "text", sender: "bot" },
              ],
            }
          : chat,
      ),
    );
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 gap-2">
      <div className="dark:md:bg-gray-900 md:bg-gray-400 md:shadow-md rounded-lg w-full flex flex-row md:p-4 gap-4 h-[80vh] md:mt-10">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center mb-4 dark:bg-gray-800 bg-gray-300 p-2 rounded-lg">
            <img
              src={avatarBot.src}
              alt="Chat Bot Icon"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <p className="text-lg font-semibold dark:text-white text-black">
              Chat Bot (XAI)
            </p>
          </div>

          <div
            id="chat-box"
            ref={messagesEndRef}
            className="dark:bg-gray-800 bg-gray-300 p-4 rounded-lg overflow-y-auto flex flex-col gap-4 h-full screen min-w-72"
          >
            {!selectedChat?.length ? (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="dark:text-gray-400 text-gray-950 text-center sm:text-[16px] text-[13px]">
                  Comece um chat tradicional
                  <br />
                  ou envie uma mensagem para Sofia Bot.
                </p>
                <button
                  onClick={handleNewTraditionalConversation}
                  className="mt-4 bg-blue-600 text-white p-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Iniciar Chat
                </button>
                <button
                  onClick={handleNewAIConversation}
                  className="mt-2 bg-green-600 text-white p-2 px-4 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  Iniciar Chat com IA
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
                          <Button
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
                          </Button>
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

          <div className="mt-4 flex gap-2 flex-row">
            <Input
              placeholder="Pergunte algo para Sofia Bot..."
              className="w-full"
              disabled={isInputDisabled}
              error={inputError}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendUserMessage()}
            />
            <Button
              onClick={handleSendUserMessage}
              className="h-10.5 px-4 rounded-md"
              disabled={isInputDisabled}
            >
              <img src={send.src} alt="Send" className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
