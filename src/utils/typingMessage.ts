
export default function typingMessage(
  message: string,
  setMessage: (message: string) => void,
  setTypingDone?: (done: boolean) => void,
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
      if (setTypingDone) {
        setTypingDone(true);
        console.log("Typing done");
      }
    }
  };

  typeNextCharacter();
}
