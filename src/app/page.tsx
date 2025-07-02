"use client";

import Chat from "@/components/chat/Chat";
import NavBar from "@/components/layout/Navbar";
import { ConversationsChatProvider } from "@/context/conversationsChatContext";
import { DrawerProvider } from "@/context/drawerContext";

export default function Home() {
  return (
    <ConversationsChatProvider>
      <DrawerProvider>
        <NavBar />
        <Chat />
      </DrawerProvider>
    </ConversationsChatProvider>
  );
}
