'use client';

import { useState, useRef, useEffect } from 'react';
import { brand, chatbotConfig } from '@/lib/brand';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopout, setIsPopout] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: chatbotConfig.welcomeMessage, isUser: false }]);
    }
  }, [isOpen, messages.length]);

  const handleQuickReply = (text: string, response: string) => {
    setMessages((prev) => [...prev, { text, isUser: true }, { text: response, isUser: false }]);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages((prev) => [...prev, { text: inputText, isUser: true }]);
      setInputText('');
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your message! Our team will get back to you as soon as possible. For immediate assistance, please call us at +251 911 280 885.",
            isUser: false,
          },
        ]);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsPopout(false);
  };

  const panel = (
    <div className={`bg-white shadow-2xl flex flex-col overflow-hidden ${isPopout ? 'w-full max-w-[720px] h-[82vh] rounded-3xl' : 'w-80 h-[500px] rounded-2xl mb-4'}`}>
      <div className="bg-gradient-to-r from-[#171c55] to-[#202767] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
            F
          </div>
          <div>
            <h3 className="font-semibold">{brand.name}</h3>
            <p className="text-xs opacity-80">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPopout((prev) => !prev)}
            className="text-xl leading-none hover:opacity-80"
            aria-label={isPopout ? 'Return to docked chat' : 'Pop out chat'}
          >
            {isPopout ? '⤢' : '⤢'}
          </button>
          <button onClick={closeChat} className="text-2xl font-light leading-none hover:opacity-80" aria-label="Close chat">
            ×
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-[#f7f8fc]">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                msg.isUser ? 'bg-[#e31e2d] text-white rounded-br-md' : 'bg-white text-[#171c55] rounded-bl-md'}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {messages.length === 1 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {chatbotConfig.quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => handleQuickReply(reply.text, reply.response)}
                className="px-3 py-1.5 rounded-full border border-[#171c55] text-xs font-medium hover:bg-[#171c55] hover:text-white transition-colors"
              >
                {reply.text}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-100 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-full outline-none focus:border-[#171c55]"
        />
        <button
          onClick={handleSend}
          className="bg-[#e31e2d] text-white px-4 py-2 rounded-full font-medium hover:bg-[#bd1320] transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        isPopout ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4">
            {panel}
          </div>
        ) : (
          panel
        )
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#171c55] to-[#202767] text-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        aria-label="Toggle chat assistant"
      >
        💬
      </button>
    </div>
  );
}
