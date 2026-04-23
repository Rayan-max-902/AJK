import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, ChevronRight, RefreshCw, BarChart, Star } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useTranslation } from 'react-i18next';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Quiz() {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const questions = [
    { id: 1, text: t('quiz.q1'), options: [t('quiz.q1_o1'), t('quiz.q1_o2'), t('quiz.q1_o3')] },
    { id: 2, text: t('quiz.q2'), options: [t('quiz.q2_o1'), t('quiz.q2_o2'), t('quiz.q2_o3')] },
    { id: 3, text: t('quiz.q3'), options: [t('quiz.q3_o1'), t('quiz.q3_o2'), t('quiz.q3_o3')] },
    { id: 4, text: t('quiz.q4'), options: [t('quiz.q4_o1'), t('quiz.q4_o2'), t('quiz.q4_o3')] }
  ];

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      generateResult(newAnswers);
    }
  };

  const generateResult = async (finalAnswers: string[]) => {
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Language: ${i18n.language}. Based on these career preference answers: ${finalAnswers.join(', ')}. 
        Recommend one of these three fields at Nova Lycée:
        1. Artificial Intelligence (Deep learning, data)
        2. Modern Development (Full-stack, apps)
        3. Digital Management (Product, strategy, business)
        
        Return a JSON in ${i18n.language} language with:
        - field: string
        - reason: string (motivating 2 sentences)
        - topSkill: string`,
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (err) {
      setResult({ 
        field: i18n.language === 'fr' ? "Excellence en Innovation" : i18n.language === 'ar' ? "التميز في الابتكار" : "Innovation Excellence", 
        reason: i18n.language === 'fr' ? "Vous avez un profil équilibré adapté à tous nos programmes avancés." : i18n.language === 'ar' ? "لديك ملف شخصي متوازن مناسب لجميع برامجنا المتقدمة." : "You have a balanced profile suitable for all our advanced programs.",
        topSkill: i18n.language === 'fr' ? "Pensée Systémique" : i18n.language === 'ar' ? "تفكير المنظومات" : "Systems Thinking"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center">
      <div className="max-w-2xl w-full text-center">
        {!result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-center mb-8">
               <div className="w-16 h-16 bg-primary/10 rounded-[24px] flex items-center justify-center text-primary neon-border">
                  <Brain className="w-8 h-8" />
               </div>
            </div>
            <h2 className="text-4xl font-black mb-4">{t('quiz.title')} <span className="text-primary italic">AI</span></h2>
            <p className="text-muted-foreground mb-12">{t('quiz.subtitle')}</p>
            
            <div className="glass p-12 rounded-[40px] border-border text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-muted-foreground">
                  {t('common.loading').toUpperCase()} {step + 1} / {questions.length}
               </div>

               <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                     <h3 className="text-2xl font-bold mb-8">{questions[step].text}</h3>
                     <div className="space-y-4">
                        {questions[step].options.map((opt, i) => (
                           <button
                             key={i}
                             onClick={() => handleAnswer(opt)}
                             className="w-full text-left p-6 glass rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-between group"
                           >
                              <span className="text-gray-300 font-medium">{opt}</span>
                              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
                           </button>
                        ))}
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
          </motion.div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-8">
             <div className="relative">
                <div className="w-24 h-24 border-4 border-primary/20 rounded-full animate-spin border-t-primary" />
                <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse" />
             </div>
             <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{t('common.loading')}...</h3>
                <p className="text-gray-500 font-mono text-xs">COLLECTING NEURAL DATA_</p>
             </div>
          </div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-[40px] border-primary/30 relative"
          >
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 bg-primary rounded-2xl neon-border">
                <Star className="w-6 h-6 text-white" />
             </div>
             
             <h3 className="text-sm font-bold text-primary uppercase tracking-[4px] mb-4 mt-4">{t('quiz.match')}</h3>
             <h2 className="text-5xl font-black mb-8">{result.field}</h2>
             
             <div className="p-8 bg-white/5 rounded-3xl border border-white/5 mb-10 text-lg leading-relaxed text-gray-300">
                "{result.reason}"
             </div>

             <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-white/5 rounded-2xl text-left">
                   <div className="text-[10px] text-gray-600 font-black uppercase mb-1">{t('quiz.skill')}</div>
                   <div className="text-sm font-bold text-white">{result.topSkill || 'System Design'}</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl text-left">
                   <div className="text-[10px] text-gray-600 font-black uppercase mb-1">{t('quiz.match')}</div>
                   <div className="text-sm font-bold text-primary">98.4%</div>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
                <button 
                 onClick={() => { setStep(0); setAnswers([]); setResult(null); }}
                 className="flex-grow py-4 glass rounded-2xl text-sm font-bold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all"
                >
                   <RefreshCw className="w-4 h-4" />
                   <span>{t('quiz.restart')}</span>
                </button>
                <button className="flex-grow py-4 bg-primary rounded-2xl text-sm font-bold neon-border hover:scale-105 transition-all">
                   {t('common.participate')}
                </button>
             </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
