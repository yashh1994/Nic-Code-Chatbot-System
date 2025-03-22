
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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate bot response after 4 seconds
    setTimeout(() => {
      const botResponse = { 
        id: Date.now(), 
        text: "Thank you for your question. NIC (National Industrial Classification) codes are standardized codes used to classify businesses by their economic activity. They're essential for regulatory compliance, statistical reporting, and economic analysis. Is there anything specific about NIC codes you'd like to know?", 
        sender: 'bot' as const 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 4000);
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
              {message.text}
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
