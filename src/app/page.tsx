"use client";

import Chat from "@/components/Chat";
import NavBar from "@/components/NavBar";
import { ConversationsChatProvider } from "@/context/ConversationsChatContext";
import { DrawerProvider } from "@/context/DrawerContext";

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
