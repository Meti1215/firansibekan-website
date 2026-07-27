'use client'

// Advanced Chatbot with OpenAI Integration (Optional)
// To use this version:
// 1. Install: npm install openai
// 2. Add OPENAI_API_KEY to your environment variables
// 3. Replace the import in layout.tsx

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand } from '@/lib/brand'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  quickReplies?: string[]
}

const ChatbotAdvanced = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [useAI, setUseAI] = useState(false) // Toggle between rule-based and AI
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `Hello! I'm the ${brand.shortName} assistant. I can help you with information about our ventures, partnerships, and contact details. Ask me anything!`,
        isBot: true,
        timestamp: new Date(),
        quickReplies: [
          "Our Ventures",
          "Hospitality & Wellness",
          "Exports",
          "Partnerships",
          "Location & Contact"
        ]
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  // Hospital knowledge base for AI context
  const hospitalContext = `
  ${brand.name} Information:
  
  SERVICES:
  - FMCG & rural distribution
  - Paper & sanitary products
  - Hospitality & wellness
  - Real estate development
  - Mining, agriculture, and export ventures
  
  OPERATING HOURS:
  - ${brand.hours}
  
  CONTACT:
  - Phone: ${brand.phone}
  - Location: ${brand.location}
  - ${brand.emailLabel}
  
  FOCUS:
  - Founder-led growth
  - Diversified ventures
  - Partnership-driven expansion
  `

  // Rule-based responses (fallback)
  const getRuleBasedResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const message = userMessage.toLowerCase()

    if (message.includes('hour') || message.includes('time') || message.includes('open')) {
      return {
        text: `We are available ${brand.hours}.`,
        quickReplies: ["Our Ventures", "Request Information", "Location & Contact"]
      }
    }

    if (message.includes('service') || message.includes('services') || message.includes('offer') || message.includes('do you do')) {
      return {
        text: 'Firansibekan Trade and Investment operates across Health & Hospital Solutions, IT & IT Consulting, Electromechanical Works, and Medical Imaging Solutions.',
        quickReplies: ["Health & Hospitals", "IT Consulting", "Electromechanical", "Medical Imaging"]
      }
    }

    if (message.includes('health') || message.includes('hospital') || message.includes('medical') || message.includes('equipment') || message.includes('diagnostic')) {
      return {
        text: 'Our Health & Hospitals department provides high-resolution medical imaging, featuring the Mindray DigiEye 330 Digital X-Ray System.',
        quickReplies: ["IT Consulting", "Medical Imaging", "Request Information"]
      }
    }

    if (message.includes('it') || message.includes('consulting') || message.includes('network') || message.includes('server') || message.includes('software')) {
      return {
        text: 'Our IT Consulting department helps teams build practical, dependable technology networks and database systems.',
        quickReplies: ["Health & Hospitals", "Electromechanical", "Request Information"]
      }
    }

    if (message.includes('electromechanical') || message.includes('mechanical') || message.includes('electrical') || message.includes('wiring') || message.includes('machinery')) {
      return {
        text: 'Our Electromechanical Works department provides reliable industrial machinery setups, wiring, and electrical engineering support for daily operations.',
        quickReplies: ["Health & Hospitals", "IT Consulting", "Request Information"]
      }
    }

    if (message.includes('imaging') || message.includes('x-ray') || message.includes('xray') || message.includes('radiography') || message.includes('mindray')) {
      return {
        text: 'Our Medical Imaging Solutions specialize in advanced digital radiography setups for medical facilities, supporting high-resolution detail and faster acquisition.',
        quickReplies: ["Health & Hospitals", "IT Consulting", "Request Information"]
      }
    }

    if (message.includes('partner') || message.includes('partnership') || message.includes('joint') || message.includes('venture') || message.includes('investor')) {
      return {
        text: 'We welcome strategic partnerships across medical equipment distribution, electromechanical projects, and IT consulting services.',
        quickReplies: ["Our Services", "Request Information", "Location & Contact"]
      }
    }

    if (message.includes('location') || message.includes('address') || message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('where')) {
      return {
        text: `Phone: ${brand.phone} | Location: ${brand.location} | ${brand.emailLabel}`,
        quickReplies: ["Operating Hours", "Request Information", "Our Ventures"]
      }
    }

    if (message.includes('request') || message.includes('information') || message.includes('inquiry') || message.includes('quote') || message.includes('pricing') || message.includes('order') || message.includes('contract')) {
      return {
        text: `To request information or discuss an opportunity, please call ${brand.phone} or use the Contact section on the website.`,
        quickReplies: ["Location & Contact", "Operating Hours", "Our Ventures"]
      }
    }

    return {
      text: `I'd be happy to help you with information about ${brand.name}. What would you like to know?`,
      quickReplies: ["Our Ventures", "Hospitality & Wellness", "Exports", "Location & Contact"]
    }
  }

  // AI-powered response (requires OpenAI API)
  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      // This would require OpenAI API setup
      // For now, return a placeholder
      return "AI response would go here. To enable AI responses, you need to set up OpenAI API integration."
    } catch (error) {
      console.error('AI response error:', error)
      return getRuleBasedResponse(userMessage).text
    }
  }

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim()
    if (!text) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      let responseText: string
      let quickReplies: string[] | undefined

      if (useAI) {
        responseText = await getAIResponse(text)
      } else {
        const response = getRuleBasedResponse(text)
        responseText = response.text
        quickReplies = response.quickReplies
      }

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isBot: true,
          timestamp: new Date(),
          quickReplies
        }

        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    } catch (error) {
      console.error('Error getting response:', error)
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-sm bg-gradient-to-r from-medical-blue to-medical-red text-white shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-sm shadow-2xl border border-gray-200 z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-medical-blue to-medical-red text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-sm flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{brand.shortName} Assistant</h3>
                  <p className="text-xs text-white/80">
                    {useAI ? 'AI Mode' : 'Quick Help'} • Online
                  </p>
                </div>
              </div>
              
              {/* AI Toggle */}
              <button
                onClick={() => setUseAI(!useAI)}
                className="text-xs bg-white/20 px-2 py-1 rounded-sm hover:bg-white/30 transition-colors"
              >
                {useAI ? 'AI' : 'Basic'}
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`px-4 py-2 rounded-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-gradient-to-r from-medical-blue to-medical-red text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    
                    {/* Quick Replies */}
                    {message.isBot && message.quickReplies && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleSendMessage(reply)}
                            className="px-3 py-1 text-xs bg-medical-blue/10 text-medical-blue rounded-sm hover:bg-medical-blue/20 transition-colors"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 ${
                    message.isBot ? 'order-1 mr-2 bg-medical-blue/10' : 'order-2 ml-2 bg-medical-red/10'
                  }`}>
                    {message.isBot ? (
                      <Bot className="w-4 h-4 text-medical-blue" />
                    ) : (
                      <User className="w-4 h-4 text-medical-red" />
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-sm bg-medical-blue/10 flex items-center justify-center">
                      <Loader2 className="w-4 h-4 text-medical-blue animate-spin" />
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-sm">
                      <p className="text-sm text-gray-600">Thinking...</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`Ask me about ${brand.shortName}...`}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-sm bg-gradient-to-r from-medical-blue to-medical-red"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotAdvanced
