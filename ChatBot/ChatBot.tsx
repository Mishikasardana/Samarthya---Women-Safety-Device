import * as React from "react";
import { Message } from "./Message";
import { ActionButton } from "./ActionButton";
import { ChatInput } from "./ChatInput";

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = React.useState([
    { text: "How can I help you today?", isUser: false },
    { text: "I need someone to talk to", isUser: true, timestamp: "Just now" },
    { text: "I am here to listen. Would you like to:", isUser: false }
  ]);

  const actions = [
    { text: "Connect to counselor", ariaLabel: "Connect with a counselor" },
    { text: "Join support group", ariaLabel: "Join a support group" },
    { text: "Talk about what happened", ariaLabel: "Discuss your experience" }
  ];

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, { text: message, isUser: true, timestamp: "Just now" }]);
  };

  return (
    <main 
      className="flex overflow-hidden flex-col pt-14 mx-auto w-full 
                 bg-orange-100 max-w-[480px] rounded-[30px]"
      role="main"
    >
      <div className="flex flex-col items-start px-6 pb-16 w-full font-semibold">
        <header className="flex flex-col self-stretch">
          <h1 className="self-center text-3xl font-extrabold text-center text-stone-800">
            CHAT BOT
          </h1>
          
          <div className="messages-container" role="log" aria-live="polite">
            {messages.map((msg, index) => (
              <Message
                key={index}
                text={msg.text}
                isUser={msg.isUser}
                timestamp={msg.timestamp}
              />
            ))}
          </div>
        </header>

        <nav className="flex flex-col gap-2.5 w-full mt-14">
          {actions.map((action, index) => (
            <ActionButton
              key={index}
              {...action}
              onClick={() => {}}
            />
          ))}
        </nav>

        <div 
          className="z-10 px-16 py-3.5 mt-8 max-w-full text-2xl 
                     bg-white rounded-xl border border-pink-700 
                     border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.25)] 
                     text-stone-800 w-[345px]"
          role="complementary"
        >
          Support Group
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </main>
  );
};
