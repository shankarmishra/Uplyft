import React, { useState, useEffect } from 'react';
import ChatInterface from '../components/ChatInterface';
import PastConversations from '../components/PastConversations';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Commerce Chatbot</h1>
        {user && (
          <div>
            <span className="mr-4">Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </header>
      <div className="flex flex-1 overflow-hidden">
        <PastConversations userId={user?.id} />
        <ChatInterface userId={user?.id} />
      </div>
    </div>
  );
}

export default Home;