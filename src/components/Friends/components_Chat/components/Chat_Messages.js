import React from "react";
import Contact_toolbar from "../../Materials/Contact_toolbar";
import MessagesList from "./components_ChatMessages/MessagesList";
import SendMessage from "../../Materials/SendMessage";

function Chat_Messages() {
  return (
    <>
      <Contact_toolbar />
      <MessagesList />
      <SendMessage />
    </>
  );
}

export default Chat_Messages;
