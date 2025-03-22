
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export const Chatbot: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm the NIC Code Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchNicCodeData = async (userMessage: string) => {
    try {
      const response = await fetch('https://nic-code-api.onrender.com/get-nic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ desc: [userMessage] })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.res;
    } catch (error) {
      console.error('Error fetching NIC code data:', error);
      return 'Sorry, I encountered an error while processing your request. Please try again later.';
    }
  };

  // Function to format the bot's response text
  const formatBotResponse = (text: string) => {
    // Look for patterns like **NIC Code:** and **Explanation:**
    const formattedText = text
      .replace(/\*\*NIC Code:\*\*/g, '<strong>NIC Code:</strong>')
      .replace(/\*\*Explanation:\*\*/g, '<strong>Explanation:</strong>');
    
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Only send the latest user message to the API
    try {
      const response = await fetchNicCodeData(input);
      
      const botResponse = { 
        id: Date.now(), 
        text: response, 
        sender: 'bot' as const 
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error in chat interaction:', error);
      
      const errorResponse = { 
        id: Date.now(), 
        text: "I'm sorry, I couldn't process your request. Please try again later.", 
        sender: 'bot' as const 
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] glass-panel rounded-xl overflow-hidden flex flex-col">
      <div className="p-4 border-b bg-white/90">
        <h2 className="text-lg font-medium text-nic-primary">NIC Code Assistant</h2>
        <p className="text-sm text-nic-muted">Ask anything about NIC codes and their applications</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50">
        <div className="flex flex-col">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={message.sender === 'user' ? 'user-message' : 'bot-message'}
            >
              {message.sender === 'bot' ? formatBotResponse(message.text) : message.text}
            </div>
          ))}
          
          {isLoading && (
            <div className="bot-message flex items-center">
              <div className="typing-indicator">
                <span className="animate-chatbot-typing-1"></span>
                <span className="mx-1 animate-chatbot-typing-2"></span>
                <span className="animate-chatbot-typing-3"></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim()}>
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};
