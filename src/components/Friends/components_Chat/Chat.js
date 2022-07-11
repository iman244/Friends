import Chat_Menu from "./components/Chat_Menu";
import Chat_Messages from "./components/Chat_Messages";

function Chat() {
  return (
    <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
      <div className="w-full border-r border-gray-300 lg:col-span-1">
        <Chat_Menu />
      </div>

      <div className="hidden lg:col-span-2 lg:block">
        <Chat_Messages />
      </div>
    </div>
  );
}

export default Chat;
