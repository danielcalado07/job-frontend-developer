import Chat from "@/components/Chat";
import ChatHistory from "@/components/ChatHistory";
import NavBar from "@/components/NavBar";
import { DrawerProvider } from "@/context/DrawerContext";

export default function Home() {
  return (
    <>
      <DrawerProvider>
        <NavBar />
        <Chat />
      </DrawerProvider>
    </>
  );
}
