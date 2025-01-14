import * as React from "react";
import { ChatInputProps } from "./types";

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col mt-12 w-full"
    >
      <div className="relative w-full">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={disabled}
          className="
            self-center px-4 py-6 w-full max-w-[372px] 
            bg-white rounded-xl text-xl font-extralight 
            focus:outline-none focus:ring-2 
            focus:ring-pink-700 disabled:opacity-50
          "
          aria-label="Message input"
        />
        <button
          type="submit"
          disabled={disabled || !message.trim()}
          className="
            absolute right-4 top-1/2 transform 
            -translate-y-1/2 p-2 rounded-full 
            hover:bg-orange-100 disabled:opacity-50
            focus:outline-none focus:ring-2 
            focus:ring-pink-700
          "
          aria-label="Send message"
        >
          <span className="sr-only">Send</span>
          <svg
            className="w-6 h-6 text-pink-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
