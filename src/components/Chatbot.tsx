import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useTranslation } from 'react-i18next';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Chatbot() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: i18n.language === 'fr' ? 'Salut ! Je suis Nova, votre assistant scolaire. Comment puis-je vous aider aujourd\'hui ?' : i18n.language === 'ar' ? 'مرحباً! أنا نوفا، مساعدك المدرسي. كيف يمكنني مساعدتك اليوم؟' : 'Hi! I am Nova, your school assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Language: ${i18n.language}. You are Nova, an AI assistant for Nova Lycée high school (AJK Association des Jeunes Al Kendi). 
        Rules: 
        1. Always answer in the user's language or ${i18n.language}.
        2. Focus on AI, Development, and Management programs.
        3. Mention hackathons, conferences, and innovation challenges.
        4. Admin email is moatadidrayan7@gmail.com.
        User asks: ${userMsg}`,
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || (i18n.language === 'fr' ? "Désolé, je n'ai pas pu traiter cela." : "I'm sorry, I couldn't process that.") }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: i18n.language === 'fr' ? "Erreur de connexion à l'IA. Veuillez réessayer plus tard." : "Error connecting to AI. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed bottom-8 ${i18n.language === 'ar' ? 'left-8' : 'right-8'} z-[100]`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border-primary/20 h-[500px]"
          >
            {/* Header */}
            <div className="p-4 bg-primary flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-bold">{t('chatbot.title')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' ? 'bg-primary text-white' : 'bg-white/10 text-gray-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl text-gray-400 text-xs animate-pulse">
                    {t('chatbot.typing')}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatbot.placeholder')}
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm placeholder:text-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="p-2 bg-primary rounded-full hover:bg-primary/80 disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-white rtl:rotate-180" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg neon-border hover:scale-110 transition-transform active:scale-95"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
