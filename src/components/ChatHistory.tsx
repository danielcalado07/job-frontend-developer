"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDrawer } from "@/context/DrawerContext";

export default function ChatHistory() {
  const { open, toggleDrawer } = useDrawer();
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
                  <div className="flex h-full flex-col overflow-y-auto bg-gray-800 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <h2 className="text-white text-lg font-semibold p-4">
                        Chats
                      </h2>
                      <a className="menu-item px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer">
                        <span className="text-white">Chat with Sofia</span>
                      </a>
                      <a className="menu-item px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer">
                        <span className="text-white">Chat with Support</span>
                      </a>
                      <a className="menu-item px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer">
                        <span className="text-white">Chat with Sales</span>
                      </a>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </div>

      {/* Sidebar for larger screens */}
      <div className="bg-gray-900 shadow-md rounded-lg w-full max-w-52 flex-col hidden md:block">
        <div className="bg-gray-800 rounded-lg overflow-y-auto flex flex-col gap-2 h-full screen">
          <h2 className="text-white text-lg font-semibold p-4">Chats</h2>
          <a className="menu-item px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer">
            <span className="text-white">Chat with Sofia</span>
          </a>
          <a className="menu-item px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer">
            <span className="text-white">Chat with Support</span>
          </a>
          <a
            className="menu-item px-4 py-2 hover:bg-gray-700 transition-colors
                    cursor-pointer"
          >
            <span className="text-white">Chat with Sales</span>
          </a>
        </div>
      </div>
    </>
  );
}
