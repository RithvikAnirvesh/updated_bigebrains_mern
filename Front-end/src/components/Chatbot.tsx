import React, { useState, useRef, useEffect, useCallback } from 'react';
import Lottie from 'lottie-web';
import arrowanimation from "../asserts/animations/arrow.json";
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';


interface ChatOption {
  text: string;
  value: string;
}

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  options?: ChatOption[];
}

// Knowledge base for bot responses
const knowledgeBase = {
  'company': 
`Company Overview:

▸ Name: Big E Brains Private Limited
▸ Type: IT Services and Technology Solutions Provider
▸ Registration: U72200TG2016PTC103355
▸ Location: Telangana, India
▸ Website: bigebrains.com`,

  'services': 
`Our Core Services:

1. IT Strategy & Consulting
   ▸ IT strategy gap analysis
   ▸ Strategic technology guidance
   ▸ Scalable solution planning
   ▸ Business needs optimization

2. Cybersecurity & Risk Management
   ▸ Managed security services
   ▸ Cyber risk reduction
   ▸ Compliance management
   ▸ Security monitoring

3. Web & Mobile Development
   ▸ High-conversion web applications
   ▸ Native & cross-platform apps
   ▸ Performance optimization
   ▸ User experience focus

4. Cloud & E-commerce
   ▸ Scalable cloud solutions
   ▸ Migration services
   ▸ E-commerce platforms
   ▸ Platform optimization

5. Managed IT Services
   ▸ Comprehensive IT support
   ▸ Technology monitoring
   ▸ Innovation implementation
   ▸ Cost optimization`,

  'industries': 
`Industry Specializations:

1. Healthcare
   ▸ Custom IT solutions
   ▸ Patient data security
   ▸ Compliance management
   ▸ Healthcare integrations

2. Finance
   ▸ Banking technology
   ▸ Secure solutions
   ▸ Risk management
   ▸ Financial compliance

3. Manufacturing
   ▸ Process automation
   ▸ Supply chain systems
   ▸ Quality control
   ▸ Industry 4.0 solutions

4. General Business
   ▸ Cross-industry services
   ▸ Business optimization
   ▸ Digital transformation
   ▸ IT infrastructure`,

  'value': 
`Value Propositions:

1. Cost-Effectiveness
   ▸ Affordable solutions
   ▸ Operational cost reduction
   ▸ Value optimization
   ▸ ROI focus

2. Innovation
   ▸ Latest technology trends
   ▸ Modern solutions
   ▸ Continuous improvement
   ▸ Future-ready systems

3. Scalability
   ▸ Growth-ready solutions
   ▸ Flexible architecture
   ▸ Business expansion support
   ▸ Adaptable systems`,

  'approach': 
`Business Approach:

1. Client Focus
   ▸ Needs assessment
   ▸ Custom solutions
   ▸ Regular consultation
   ▸ Success tracking

2. Value Maximization
   ▸ ROI optimization
   ▸ Business value focus
   ▸ Cost efficiency
   ▸ Performance metrics

3. Security & Compliance
   ▸ Proactive security
   ▸ Risk management
   ▸ Compliance adherence
   ▸ Regular monitoring`,
};

const initialMessage: ChatMessage = {
  text: "Hello! I'm BigeBrains AI, your friendly AI Agent. How can I help you today?",
  sender: 'bot'
};

const menuMessage: ChatMessage = {
  text: "What are you looking for?",
  sender: 'bot',
  options: [
    { text: "More information about BigEBrains", value: "company" },
    { text: "Connect me with Sales", value: "contact" },
    { text: "Technical product support", value: "services" },
    { text: "Industry Solutions", value: "industries" },
    { text: "Value Propositions", value: "value" }
  ]
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'default' | 'large'>('default');
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sendButtonRef = useRef<HTMLDivElement>(null);
  const lottieInstanceRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (messages.length === 1) {
      setTimeout(() => {
        setMessages(prev => [...prev, menuMessage]);
      }, 500);
    }
  }, [messages]);

  useEffect(() => {
    if (sendButtonRef.current) {
      lottieInstanceRef.current = Lottie.loadAnimation({
        container: sendButtonRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: arrowanimation,
      });

      lottieInstanceRef.current.addEventListener('complete', () => {
        setIsAnimating(false);
      });
    }

    return () => {
      if (lottieInstanceRef.current) {
        lottieInstanceRef.current.destroy();
      }
    };
  }, [isOpen]); // Re-initialize when chat opens

  const generateResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    for (const [keyword, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    return "I'd be happy to help! For specific inquiries, please contact our support team who can provide you with detailed assistance.";
  };

  const appendBotResponseWithMenu = (response: string) => {
    setMessages(prev => [
      ...prev,
      { text: response, sender: 'bot' } as ChatMessage,
      menuMessage
    ]);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Start animation
    setIsAnimating(true);
    if (lottieInstanceRef.current) {
      lottieInstanceRef.current.goToAndPlay(0);
    }

    setMessages(prev => [...prev, { text: inputValue, sender: 'user' } as ChatMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(inputValue);
      appendBotResponseWithMenu(response);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (message: string) => {
    setMessages(prev => [...prev, { text: message, sender: 'user' } as ChatMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(message);
      appendBotResponseWithMenu(response);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionSelect = (option: ChatOption) => {
    setMessages(prev => [...prev, { text: option.text, sender: 'user' } as ChatMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(option.value);
      appendBotResponseWithMenu(response);
      setIsTyping(false);
    }, 800);
  };

  const handleMinimize = () => {
    setMinimized(true);
  };

  const handleRestore = () => {
    setMinimized(false);
  };

  const handleFontSize = () => {
    setFontSize(current => {
      if (current === 'small') return 'default';
      if (current === 'default') return 'large';
      return 'small';
    });
  };

  const handleEndSession = () => {
    setMessages([initialMessage]);
    setShowEndDialog(false);
    setIsOpen(false);
  };

  const findMatchingOption = (text: string): ChatOption | undefined => {
    const normalizedText = text.toLowerCase();
    return menuMessage.options?.find(option => {
      const normalizedOption = option.text.toLowerCase();
      return normalizedText.includes(normalizedOption) || 
             normalizedOption.includes(normalizedText);
    });
  };

  const handleVoiceInput = useCallback((text: string) => {
    const matchingOption = findMatchingOption(text);
    if (matchingOption) {
      handleOptionSelect(matchingOption);
    } else {
      setInputValue(text);
      handleSend();
    }
  }, []);

  const { isListening, startListening, stopListening, browserSupportsSpeechRecognition } = 
    useVoiceRecognition(handleVoiceInput);

  return (
    <div className="fixed bottom-3 right-5 z-40">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-xl text-white hover:bg-blue-700 transition-colors"
      >
        💬
      </button>

      {isOpen && !minimized && (
        <div className="absolute bottom-16 right-0 w-[370px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/Favicon.png"
                alt="PegaBot"
                className="w-8 h-8 rounded-full object-cover bg-white border"
              />
              <span className="text-white text-lg font-semibold">BigeBrains AI</span>
            </div>
            <div className="relative group">
              <button className="text-white text-2xl px-2 py-1 rounded-full hover:bg-blue-700 focus:outline-none">
                <span className="align-middle">⋮</span>
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg border z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 flex items-center gap-2 text-base"
                  onClick={handleMinimize}
                >
                  <span className="text-lg">—</span> Minimize
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 flex items-center gap-2 text-base"
                  onClick={handleFontSize}
                >
                  <span className="text-base">T</span> Font size - {fontSize.charAt(0).toUpperCase() + fontSize.slice(1)}
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 flex items-center gap-2 text-base"
                  onClick={() => setShowEndDialog(true)}
                >
                  <span className="text-lg">🚫</span> End session
                </button>
              </div>
            </div>
          </div>

          {/* Chat messages with dynamic font size */}
          <div className={`flex-1 overflow-y-auto p-3 bg-gray-50 ${
            fontSize === 'small' ? 'text-sm' : 
            fontSize === 'large' ? 'text-lg' : 
            'text-base'
          }`}>
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-4">
                {msg.sender === 'bot' && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                      🤖
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        {msg.text}
                      </div>
                      {msg.options && (
                        <div className="mt-3 space-y-2">
                          {msg.options.map((option, i) => (
                            <button
                              key={i}
                              onClick={() => handleOptionSelect(option)}
                              className="w-full text-left p-3 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
                            >
                              {option.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {msg.sender === 'user' && (
                  <div className="flex justify-end">
                    <div className="max-w-[75%] bg-blue-600 text-white rounded-lg p-3">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  🤖
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* End Session Dialog */}
          {showEndDialog && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 m-4 max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">End Session?</h3>
                <p className="text-gray-600 mb-6">This will end your current chat session.</p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowEndDialog(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEndSession}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    End Session
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Input Area */}
          <div className="px-3 pt-2 pb-3 bg-white border-t">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type here"
                className="w-full px-3 py-1.5 bg-gray-100 rounded-lg pr-24 text-sm focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center transition-transform hover:scale-110"
                disabled={isAnimating}
              >
                <div ref={sendButtonRef} className="w-12 h-12" />
              </button>
            </div>

            {/* Navigation and Footer */}
            <div className="mt-2">
              <div className="flex justify-center gap-8 py-1.5 border-t border-gray-200">
                <button className="flex flex-col items-center text-blue-600">
                  <span className="text-base">💬</span>
                  <span className="text-[8px] mt-0.5">Chat</span>
                </button>
                <button 
                  onClick={async () => {
                    if (isListening) {
                      stopListening();
                    } else {
                      await startListening();
                    }
                  }}
                  disabled={!browserSupportsSpeechRecognition}
                  className={`flex flex-col items-center ${
                    !browserSupportsSpeechRecognition ? 'opacity-50 cursor-not-allowed text-gray-400' : 
                    isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className="text-base">{isListening ? '🔴' : '🎤'}</span>
                  <span className="text-[8px] mt-0.5">
                    {!browserSupportsSpeechRecognition 
                      ? 'Not supported' 
                      : isListening 
                        ? 'Listening...' 
                        : 'Voice'
                    }
                  </span>
                </button>
              </div>
              <div className="text-center text-[8px] text-gray-500 mt-1.5">
                <p>Powered by BigeBrains</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimized View */}
      {isOpen && minimized && (
        <div 
          onClick={handleRestore}
          className="absolute bottom-16 right-0 w-[200px] bg-blue-600 rounded-t-lg shadow-xl flex items-center justify-between px-4 py-2 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <img
              src="/Favicon.png"
              alt="BigeBrains AI"
              className="w-6 h-6 rounded-full bg-white"
            />
            <span className="text-white font-medium">BigeBrains AI</span>
          </div>
          <span className="text-white">▲</span>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
