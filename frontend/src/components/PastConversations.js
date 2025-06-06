import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PastConversations({ userId }) {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/chat/history?user_id=${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setConversations(response.data || []);
      } catch (error) {
        setConversations([]);
        console.error('Error fetching conversations:', error);
      }
      setLoading(false);
    };
    if (userId) fetchConversations();
  }, [userId]);

  return (
    <div className="w-64 bg-gray-50 p-4 overflow-y-auto border-r">
      <h2 className="text-lg font-semibold mb-4">Past Conversations</h2>
      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : conversations.length === 0 ? (
        <p className="text-sm text-gray-400">No conversations found.</p>
      ) : (
        conversations.map((chat) => (
          <div key={chat.id} className="mb-2 p-2 bg-white rounded shadow">
            <p className="text-sm">{chat.message}</p>
            <span className="text-xs text-gray-500">
              {chat.timestamp ? new Date(chat.timestamp).toLocaleString() : ''}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default PastConversations;