import React, { useState, useRef, useEffect } from 'react';

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // 🌟 Default starting message block array list
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I am Whoppy, your Digital Whopper AI assistant. How can I help grow your brand today? 🚀",
      sender: 'bot'
    }
  ]);

  const chatMessagesEndRef = useRef(null);

  // Auto-scroll logic tracker
  useEffect(() => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || userInput.trim();
    if (!text) return;

    // 1. User message state update hooks block
    const userMsgId = Date.now();
    setMessages((prev) => [...prev, { id: userMsgId, text: text, sender: 'user' }]);
    
    if (!textToSend) setUserInput('');
    
    // 2. Typing indicator engine triggers active
    setIsTyping(true);

    // 3. Automated Brain Engine Processing Block
    setTimeout(() => {
      setIsTyping(false);
      const query = text.toLowerCase();
      let botReply = "That's interesting! Let me connect you directly to our growth team on WhatsApp for details. Or type 'services' to see what we build! 🚀";

      if (query.includes('services') || query.includes('service') || query.includes('work')) {
        botReply = "We provide full 360° digital growth solutions! ✦ App & Shopify Build ✦ SEO Optimization ✦ Performance Meta/Google Funnel Ads ✦ D2C scaling. Which one are you looking for?";
      } else if (query.includes('pricing') || query.includes('price') || query.includes('cost') || query.includes('charge')) {
        botReply = "Our packages are fully customized based on your business targets! Let's build a free consultation map. Drop us a ping on WhatsApp at +916200379161.";
      } else if (query.includes('contact') || query.includes('human') || query.includes('speak') || query.includes('call')) {
        botReply = "Perfect! Opening direct WhatsApp hotline channel with our strategist. Click here: <a href='https://wa.me/916200379161' target='_blank' rel='noopener noreferrer' style='text-decoration:underline;color:#0052ff;'>Chat on WhatsApp</a> 📲";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot' }]);
    }, 1100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  // Quick action suggestion click utility launcher
  const triggerSuggestion = (keyword) => {
    handleSendMessage(`I want to know about ${keyword}`);
  };

  // Check if any user message has been sent to auto-collapse chips
  const hasUserSentMessage = messages.some(m => m.sender === 'user');

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'chat-open' : ''}`}>
      {/* Floating Interactive Circle Trigger */}
      <div className="chat-bubble" id="chatBubble" onClick={() => setIsOpen(true)}>
        <div className="robot-image-container">
          <img src="/hero-robo.png" alt="Whoppy AI Robot" className="bot-bubble-img" />
        </div>
      </div>

      {/* Main Intelligent Chat Window Frame Component */}
      <div className="chat-window" id="chatWindow">
        <div className="chat-header">
          <div className="chat-header-user">
            <div className="bot-avatar-container">
              <img src="/hero-robo.png" alt="Whoppy AI Avatar" className="bot-header-img" />
            </div>
            <div>
              <h4>Whoppy AI</h4>
              <span className="status-online">● Online</span>
            </div>
          </div>
          <button className="close-chat-btn" id="closeChatBtn" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        
        <div className="chat-body-messages" id="chatMessages">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`msg-bubble ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          ))}

          {/* Typing Indicator Element Component Block */}
          {isTyping && (
            <div className="typing-indicator" id="typingIndicator" style={{ color: '#5c6b82', fontSize: '12px', padding: '4px' }}>
              Whoppy is typing...
            </div>
          )}

          {/* Quick Click Micro Suggestions Chips Layer (Fixed nested condition error here) */}
          {!hasUserSentMessage && !isTyping && (
            <div className="chat-suggestions" id="chatSuggestions">
              <button className="suggest-chip" onClick={() => triggerSuggestion('Services')}>Our Services</button>
              <button className="suggest-chip" onClick={() => triggerSuggestion('Pricing')}>Check Pricing</button>
              <button className="suggest-chip" onClick={() => triggerSuggestion('Contact')}>Speak to Human 👤</button>
            </div>
          )}
          <div ref={chatMessagesEndRef} />
        </div>

        <div className="chat-footer-input">
          <input 
            type="text" 
            id="chatUserInput" 
            placeholder="Type your message here..." 
            autoComplete="off"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button id="sendChatBtn" className="send-msg-btn" onClick={() => handleSendMessage()}>✦</button>
        </div>
      </div>
    </div>
  );
}

export default AIChatbot;
