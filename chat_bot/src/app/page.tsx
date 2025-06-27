import avatarBot from '../assets/avatarBot.png';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Chat Bot</h1>
      <div className="bg-gray-900 shadow-md rounded-lg p-4 w-full max-w-md">
        <div className="flex items-center mb-4 bg-gray-500 p-4 rounded-lg">
          <img
            src={avatarBot.src}
            alt="Chat Bot Icon"
            className="w-12 h-12 mr-4 rounded-full"
          />
          <p className="text-lg font-semibold text-white">Chat Bot</p>
        </div>
        <div id="chat-box" className="bg-gray-800 p-4 rounded-lg h-64 overflow-y-auto flex flex-col gap-2">
          <div id="messages_container-bot" className="flex flex-row gap-2">
            <img src={avatarBot.src} alt="Bot Avatar" className="w-8 h-8 rounded-full mb-2" />
            <div className="bg-gray-700 text-white p-2 rounded-lg">
              <p>Hello! How can I assist you today? you can ask me anything. you can also ask me to generate a code snippet for you.</p>
            </div>
          </div>
            <div id="messages_container-user" className="flex flex-row gap-2 mt-2 justify-end">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <p>What is the weather like today?</p>
            </div>
            <img src={avatarBot.src} alt="User Avatar" className="w-8 h-8 rounded-full mb-2" />
            </div>
        </div>
        <div className="mt-4 flex flex-row gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className=" bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
