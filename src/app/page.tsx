"use client";

import Chat from "@/components/chat/Chat";
import Chatxai from "@/components/chat/Chatxai";
import NavBar from "@/components/layout/Navbar";
import { ConversationsChatProvider } from "@/context/conversationsChatContext";
import { DrawerProvider } from "@/context/drawerContext";
import { ModaisProvider } from "@/context/modalContext";

export default function Home() {
  return (
    <ConversationsChatProvider>
      <ModaisProvider>
        <DrawerProvider>
          <NavBar />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-10">
            <Chat />
            <Chatxai />
          </div>
        </DrawerProvider>
      </ModaisProvider>
    </ConversationsChatProvider>
  );
}
