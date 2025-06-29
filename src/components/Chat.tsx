"use client";
import { messages_bot } from "@/data/messages";
import avatarBot from "@/assets/avatarBot.png";
import { useEffect, useState } from "react";
import ChatHistory from "./ChatHistory";
import send from "@/assets/send.svg";
import { Message, Option } from "@/types/message";
import typingMessage from "@/utils/typingMessage";

export default function Chat() {
  const [message2, setMessage2] = useState<string>("");
  const [menssages, setMenssages] = useState<Message[]>(
    messages_bot.filter((msg) => msg.type === "welcome"),
  );

  const handleSendMessage = (message: string, idNextMessage: number) => {
    const newMessage: Message = {
      message,
      type: "text",
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessage2("");
    setMenssages((prevMessages) => {
      const updatedMessages = [...prevMessages, newMessage];
      const nextMessage = messages_bot.find((msg) => msg.id === idNextMessage);
      if (nextMessage) {
        return [...updatedMessages, nextMessage];
      }
      return updatedMessages;
    });
  };

  useEffect(() => {
    const lastMessage = menssages[menssages.length - 1];
    if (lastMessage?.sender === "bot" && !lastMessage.typingDone) {
      typingMessage(lastMessage.message, setMessage2, setMenssages);
    }
  }, [menssages]);

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
            {menssages.map((message, index) =>
              message.sender === "bot" ? (
                <div
                  id="messages_container-bot"
                  className="flex flex-row gap-2"
                  key={index}
                >
                  <div className="w-9 h-9 rounded-full mb-2 bg-gray-700">
                    <img
                      src={avatarBot.src}
                      alt="Bot Avatar"
                      className="w-9 h-9 rounded-full"
                    />
                  </div>
                  <div className="bg-gray-700 text-white p-2 rounded-e-lg rounded-es-lg flex flex-col gap-2 text-sm w-[90%]">
                    <p className="mb-2">
                      {index === menssages.length - 1 &&
                      message.sender === "bot"
                        ? message2
                        : message.message}
                    </p>
                    {message.typingDone ? (
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
                    ) : null}
                  </div>
                </div>
              ) : (
                <div
                  id="messages_container-user"
                  className="flex flex-row gap-2 justify-end text-sm w-[90%] ml-auto"
                  key={index}
                >
                  <p className="bg-blue-600 text-white p-2 rounded-s-lg rounded-se-lg">
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
