"use client";

import Chat from "@/components/chat/Chat";
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
          <Chat />
        </DrawerProvider>
      </ModaisProvider>
    </ConversationsChatProvider>
  );
}
