import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import PastConversations from './components/PastConversations';
import Login from './components/Login';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [userId, setUserId] = useState(() => localStorage.getItem('user_id') || '');

  // Update userId after login/signup
  const handleLogin = (id) => {
    setUserId(id);
    localStorage.setItem('user_id', id);
  };

  if (!userId) {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <PastConversations userId={userId} />
        <ChatInterface userId={userId} />
      </div>
    </Router>
  );
}

export default App;