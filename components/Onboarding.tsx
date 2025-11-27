import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, CheckCircle2, ArrowRight, Bot, Inbox, Smile, TrendingUp, Shield, 
  BarChart2, MessageSquare, Check, ChevronRight, Mail, Sparkles
} from './ui/Icons';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

interface OnboardingProps {
  onComplete: () => void;
}

// --- Sub-components for specific slides ---

const TriageDemo = () => {
  const [tickets, setTickets] = useState([
    { id: 1, text: "Where is my refund?", priority: 'low', sentiment: 'neutral' },
    { id: 2, text: "Login failed again.", priority: 'low', sentiment: 'neutral' },
    { id: 3, text: "I love this tool!", priority: 'low', sentiment: 'neutral' },
  ]);

  useEffect(() => {
    // Simulate AI Triage process
    const timer1 = setTimeout(() => {
        setTickets(prev => prev.map(t => 
            t.id === 1 ? { ...t, priority: 'critical', sentiment: 'negative' } : t
        ));
    }, 800);
    const timer2 = setTimeout(() => {
        setTickets(prev => prev.map(t => 
            t.id === 3 ? { ...t, priority: 'normal', sentiment: 'positive' } : t
        ));
    }, 1600);
    const timer3 = setTimeout(() => {
        // Re-order based on priority
        setTickets(prev => [prev[0], prev[1], prev[2]]); // Keep specific order for demo visual
    }, 2400);

    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-100 p-3 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Inbox</span>
        <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
      </div>
      <div className="p-2 space-y-2">
        {tickets.map((t, i) => (
           <div key={t.id} className={`p-3 rounded-lg border transition-all duration-500 flex items-center justify-between ${
               t.priority === 'critical' ? 'bg-red-50 border-red-100 translate-x-1' : 'bg-white border-slate-100'
           }`}>
               <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                       t.sentiment === 'negative' ? 'bg-red-100 text-red-600' : 
                       t.sentiment === 'positive' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'
                   }`}>
                       {t.sentiment === 'negative' ? <Zap size={14}/> : t.sentiment === 'positive' ? <Smile size={14}/> : <Inbox size={14}/>}
                   </div>
                   <div className="text-xs font-medium text-slate-700">{t.text}</div>
               </div>
               {t.priority === 'critical' && <span className="text-[10px] font-bold text-red-500 bg-red-100 px-2 py-0.5 rounded-full">URGENT</span>}
           </div>
        ))}
      </div>
    </div>
  );
};

const DraftDemo = () => {
    const [text, setText] = useState("");
    const fullText = "Hi Jane, I'm so sorry about the login trouble. I've reset your session on our end. Please try again now!";
    
    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, idx));
            idx++;
            if (idx > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-100 p-4">
             <div className="flex items-start gap-3 mb-4 opacity-50">
                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                <div className="bg-slate-100 rounded-lg rounded-tl-none p-3 text-xs text-slate-500 w-3/4">
                    I can't log in! Fix this asap.
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <Bot size={16} />
                </div>
                <div className="bg-teal-50 rounded-lg rounded-tl-none p-3 text-xs text-slate-700 w-full shadow-sm border border-teal-100 relative">
                     {text}
                     <span className="animate-pulse text-teal-500">|</span>
                     <div className="absolute -bottom-2 -right-2 bg-white shadow rounded-full p-1 text-teal-500">
                        <Sparkles size={12} fill="currentColor" />
                     </div>
                </div>
             </div>
        </div>
    );
};

const LiveGraphDemo = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        // Initial data
        const initial = Array.from({ length: 20 }, (_, i) => ({
            time: i,
            value: 50 + Math.random() * 10
        }));
        setData(initial);

        const interval = setInterval(() => {
            setData(prev => {
                const lastTime = prev[prev.length - 1].time;
                const lastValue = prev[prev.length - 1].value;
                // Trend upwards
                const newValue = Math.min(100, Math.max(0, lastValue + (Math.random() - 0.3) * 5)); 
                return [...prev.slice(1), { time: lastTime + 1, value: newValue }];
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-100 p-4 relative overflow-hidden">
             <div className="flex justify-between items-center mb-4">
                <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Live CSAT Score</div>
                    <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        {data.length > 0 ? (data[data.length-1].value / 20).toFixed(1) : "0.0"}
                        <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded font-bold">+12%</span>
                    </div>
                </div>
                <TrendingUp size={20} className="text-teal-500" />
             </div>
             <div className="h-24 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={2} fill="url(#colorValue)" isAnimationActive={false} />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
             <div className="mt-2 text-[10px] text-slate-400 font-mono text-center">
                 Automated Insight: Performance exceeding baseline.
             </div>
        </div>
    );
};

// --- Main Onboarding Component ---

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Riza",
      subtitle: "The AI-Native OS for Customer Support.",
      description: "Replace your helpdesk clutter with an intelligent, agent-first browser designed for speed and empathy.",
      icon: <Bot size={32} />,
      color: "bg-slate-900 text-white",
      demo: (
          <div className="flex items-center justify-center h-40">
             <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl shadow-xl flex items-center justify-center animate-bounce-slow">
                 <Zap size={40} className="text-white" />
             </div>
          </div>
      )
    },
    {
      title: "Intelligent Triage",
      subtitle: "Focus on what matters.",
      description: "Riza automatically detects sentiment and urgency, reordering your queue so you tackle critical issues first.",
      icon: <Inbox size={24} />,
      color: "bg-blue-500 text-white",
      demo: <TriageDemo />
    },
    {
      title: "Automated Drafting",
      subtitle: "Write faster, sound better.",
      description: "Our LLM understands context and drafts empathetic, policy-compliant responses instantly.",
      icon: <MessageSquare size={24} />,
      color: "bg-teal-500 text-white",
      demo: <DraftDemo />
    },
    {
      title: "Self-Driving Analytics",
      subtitle: "Data Science included.",
      description: "Forget spreadsheets. Riza monitors CSAT and Ops metrics in real-time, proactively flagging operational risks.",
      icon: <BarChart2 size={24} />,
      color: "bg-indigo-500 text-white",
      demo: <LiveGraphDemo />
    }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-50 flex items-center justify-center z-50 font-sans text-slate-800">
      
      {/* Main Card */}
      <div className="w-full max-w-4xl h-[600px] bg-white rounded-3xl shadow-2xl flex overflow-hidden border border-slate-200">
        
        {/* Left Side: Visual/Demo Area */}
        <div className="w-1/2 bg-slate-50 flex flex-col items-center justify-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            
            <div className="z-10 w-full flex items-center justify-center scale-110">
                {steps[step].demo}
            </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-1/2 p-12 flex flex-col justify-between relative">
            <div className="absolute top-8 right-8 flex gap-2">
                {steps.map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === step ? 'bg-teal-600 w-6' : 'bg-slate-200'}`}
                    ></div>
                ))}
            </div>

            <div className="mt-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${steps[step].color}`}>
                    {steps[step].icon}
                </div>
                
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                    {steps[step].title}
                </h2>
                <h3 className="text-xl font-medium text-teal-600 mb-6">
                    {steps[step].subtitle}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                    {steps[step].description}
                </p>
            </div>

            <div className="flex justify-between items-center">
                <button 
                    onClick={onComplete}
                    className="text-sm font-semibold text-slate-400 hover:text-slate-600 px-4 py-2"
                >
                    Skip
                </button>
                <button 
                    onClick={nextStep}
                    className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                    {step === steps.length - 1 ? "Launch Browser" : "Next"}
                    {step === steps.length - 1 ? <Zap size={18} /> : <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;