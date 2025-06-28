"use client";
import { messages_bot } from "@/data/messages";
import avatarBot from "@/assets/avatarBot.png";
import avatarUser from "@/assets/avatarUser.png";
import { useState } from "react";
import ChatHistory from "./ChatHistory";
import send from "@/assets/send.svg";

export default function Chat() {
  const [menssages] = useState(
    messages_bot.filter((msg) => msg.type === "welcome"),
  );
  return (
    <main className="flex flex-col items-center justify-center p-4 gap-2">
      <div className="bg-gray-900 shadow-md rounded-lg w-full max-w-4xl flex flex-row p-4 gap-4 h-[70vh] mt-10">
        <ChatHistory />
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center mb-4 bg-gray-800 p-2 rounded-lg">
            <img
              src={avatarBot.src}
              alt="Chat Bot Icon"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <p className="text-lg font-semibold text-white">Chat Bot</p>
          </div>
          <div
            id="chat-box"
            className="bg-gray-800 p-4 rounded-lg overflow-y-auto flex flex-col gap-2 h-full screen min-w-72"
          >
            {menssages.map((message, index) =>
              index % 2 === 0 ? (
                <div
                  id="messages_container-bot"
                  className="flex flex-row gap-2"
                  key={index}
                >
                  <img
                    src={avatarBot.src}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full mb-2"
                  />
                  <div className="bg-gray-700 text-white p-2 rounded-lg">
                    <p>{message.message}</p>
                  </div>
                </div>
              ) : (
                <div
                  id="messages_container-user"
                  className="flex flex-row gap-2 mt-2 justify-end"
                  key={index}
                >
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <p>What is the weather like today?</p>
                  </div>
                  <img
                    src={avatarUser.src}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full mb-2"
                  />
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
