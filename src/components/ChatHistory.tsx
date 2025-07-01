"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDrawer } from "@/context/DrawerContext";
import { useConversationsChat } from "@/context/ConversationsChatContext";
import squarePen from "@/assets/square-pen.svg";
import { messages_bot } from "@/data/messages";

export default function ChatHistory() {
  const { open, toggleDrawer } = useDrawer();
  const { conversationsChats, setConversationsChats, setSelectedChat } =
    useConversationsChat();

  return (
    <>
      {/* Drawer for mobile view */}
      <div className="md:hidden fixed bottom-0 right-0 z-50 p-4">
        <Dialog open={open} onClose={toggleDrawer} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16 ">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700 "
                >
                  <TransitionChild>
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4 ">
                      <button
                        type="button"
                        onClick={() => toggleDrawer()}
                        className="relative rounded-md text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex h-full flex-col overflow-y-auto dark:bg-gray-800 bg-gray-200 shadow-xl">
                    <div className="dark:bg-gray-800 bg-gray-200 overflow-y-auto flex flex-col gap-2 h-full screen">
                      <button
                        className="bg-gray-700 dark:bg-gray-800 text-white text-md font-semibold p-4 flex items-center gap-2 cursor-pointer dark:hover:bg-gray-700 transition-colors "
                        onClick={() => {
                          const newConversation = {
                            id: conversationsChats.length + 1,
                            title: "New Conversation",
                            messages: messages_bot.filter(
                              (msg) => msg.type === "welcome",
                            ),
                          };
                          setConversationsChats([
                            ...conversationsChats,
                            newConversation,
                          ]);
                          setSelectedChat(newConversation.messages);
                          toggleDrawer();
                        }}
                      >
                        <img
                          src={squarePen.src}
                          alt="SquarePen"
                          className="w-6 h-6"
                        />
                        New Chat
                      </button>

                      {/* List of conversations */}
                      <h2 className="dark:text-white text-black text-lg font-semibold px-4 py-2">
                        Chats
                      </h2>
                      {conversationsChats.map((chat) => (
                        <button
                          key={chat.id}
                          className="menu-item px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-400 transition-colors cursor-pointer dark:text-white text-black text-md font-semibold"
                          onClick={() => {
                            setSelectedChat(chat.messages);
                            toggleDrawer();
                          }}
                        >
                          {chat.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </div>

      {/* Sidebar for larger screens */}
      <div className="bg-gray-900 shadow-md rounded-lg w-full max-w-52 flex-col hidden md:block">
        <div className="dark:bg-gray-800 bg-gray-300 rounded-lg overflow-y-auto flex flex-col gap-2 h-full screen">
          <button
            className="bg-gray-700 dark:bg-gray-800 text-white text-md font-semibold p-4 flex items-center gap-2 cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={() => {
              const newConversation = {
                id: conversationsChats.length + 1,
                title: "New Conversation",
                messages: messages_bot.filter((msg) => msg.type === "welcome"),
              };
              setConversationsChats([...conversationsChats, newConversation]);
              setSelectedChat(newConversation.messages);
            }}
          >
            <img src={squarePen.src} alt="SquarePen" className="w-6 h-6" />
            New Chat
          </button>

          {/* List of conversations */}
          <h2 className="dark:text-white text-black text-lg font-semibold px-4 py-2">
            Chats
          </h2>
          {conversationsChats.map((chat) => (
            <button
              key={chat.id}
              className="menu-item px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-400 transition-colors cursor-pointer  dark:text-white text-black text-md font-semibold"
              onClick={() => {
                setSelectedChat(chat.messages);
              }}
            >
              {chat.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
