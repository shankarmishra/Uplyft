import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ChatInterface({ userId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: 'user', timestamp: new Date().toISOString() };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_API_URL}/chat/save`,
        { user_id: userId, message: input },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const botResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/search?query=${encodeURIComponent(input)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const botMessage = {
        text: botResponse.data.message || 'Here are some products:',
        sender: 'bot',
        timestamp: new Date().toISOString(),
        products: botResponse.data.products
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, something went wrong!', sender: 'bot', timestamp: new Date().toISOString() }
      ]);
    }
  };

  const resetConversation = () => {
    setMessages([]);
  };

  return (
    <div className="flex-1 flex flex-col bg-white m-4 rounded-lg shadow-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-lg max-w-md ${
              msg.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-200'
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-500">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
            {msg.products && Array.isArray(msg.products) && msg.products.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {msg.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
          <button
            onClick={resetConversation}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;