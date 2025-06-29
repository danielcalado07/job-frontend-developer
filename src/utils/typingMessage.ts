import { Message } from "@/types/message";

export default function typingMessage(
  message: string,
  setMessage: (message: string) => void,
  setMenssages?: ((updater: (messages: Message[]) => Message[]) => void) | null,
) {
  let index = 0;
  let currentMessage = "";

  const typeNextCharacter = () => {
    if (index < message.length) {
      currentMessage += message[index];
      setMessage(currentMessage);
      index++;
      setTimeout(typeNextCharacter, 40);
    } else {
      // If setMenssages is provided, mark the typing as done
      if (setMenssages) {
        setMenssages((prevMessages: Message[]) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage) {
            return prevMessages.map((msg: Message) =>
              msg.id === lastMessage.id ? { ...msg, typingDone: true } : msg,
            );
          }
          return prevMessages;
        });
      }
    }
  };

  typeNextCharacter();
}
