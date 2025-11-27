import React from 'react';
import { Mail, Phone, MessageSquare, User, Building, DollarSign, Star, ThumbsUp, AlertTriangle, BookOpen, Send, Bot, Sparkles, Zap, CheckCircle2 } from '../ui/Icons';

const TicketWorkspace: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden bg-slate-50 flex">
      {/* Left Panel: Customer Context (Customer 360) */}
      <div className="w-72 bg-white border-r border-slate-200 p-6 overflow-y-auto shadow-sm z-10">
        <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md mb-3">
                AC
            </div>
            <h3 className="text-lg font-bold text-slate-900">Acme Corp</h3>
            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold mt-1">ENTERPRISE</span>
        </div>

        <div className="space-y-6">
            <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Metrics</h4>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 flex items-center gap-2"><DollarSign size={14}/> ARR</span>
                        <span className="text-slate-900 font-mono">$120,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 flex items-center gap-2"><Star size={14}/> CSAT</span>
                        <span className="text-yellow-600 font-bold">4.2/5.0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 flex items-center gap-2"><AlertTriangle size={14}/> Risk</span>
                        <span className="text-red-600 font-bold">HIGH</span>
                    </div>
                </div>
            </div>

            <div className="h-px bg-slate-100"></div>

            <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recent Interaction</h4>
                <div className="text-xs text-slate-500 space-y-2">
                    <p>• <span className="text-slate-800">Yesterday:</span> Feature request via Chat.</p>
                    <p>• <span className="text-slate-800">Last Week:</span> Renewal meeting scheduled.</p>
                    <p>• <span className="text-slate-800">1 Month Ago:</span> Outage reported (Resolved).</p>
                </div>
            </div>
        </div>
      </div>

      {/* Middle Panel: Conversation Thread */}
      <div className="flex-1 flex flex-col relative bg-white">
         <div className="h-14 border-b border-slate-200 flex items-center px-6 justify-between bg-white z-10">
             <div className="flex items-center gap-3">
                 <h2 className="text-slate-900 font-bold text-sm">Ticket #4492: Refund Request</h2>
                 <span className="text-slate-400 text-xs">• via Email</span>
             </div>
             <div className="flex gap-2">
                 <button className="p-2 hover:bg-slate-100 rounded text-slate-500"><Phone size={16}/></button>
                 <button className="p-2 hover:bg-slate-100 rounded text-slate-500"><Mail size={16}/></button>
             </div>
         </div>

         <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
             {/* Customer Message */}
             <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-200 shadow-sm">JD</div>
                 <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                         <span className="text-sm font-bold text-slate-900">John Doe (Acme Corp)</span>
                         <span className="text-xs text-slate-400">10:42 AM</span>
                     </div>
                     <div className="bg-white p-4 rounded-xl rounded-tl-none border border-slate-200 text-sm text-slate-700 leading-relaxed shadow-sm">
                         <p>Hi,</p>
                         <p className="mt-2">I am extremely frustrated. We've had downtime three times this week. This is unacceptable for the price we are paying. I want a partial refund for this month's billing immediately, or we will look for other providers.</p>
                         <p className="mt-2">Fix this.</p>
                     </div>
                     <div className="flex gap-2 mt-2">
                         <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-200 flex items-center gap-1"><AlertTriangle size={10}/> Sentiment: Negative (-0.8)</span>
                         <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-200">Topic: Billing/Churn</span>
                     </div>
                 </div>
             </div>

             {/* AI Draft Suggestion */}
             <div className="flex gap-4 opacity-100">
                 <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold border border-teal-200 shadow-sm">
                    <Bot size={16} />
                 </div>
                 <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                         <span className="text-sm font-bold text-teal-600 flex items-center gap-2">Riza Suggestion <Sparkles size={12}/></span>
                     </div>
                     <div className="bg-teal-50 p-4 rounded-xl rounded-tl-none border border-teal-200 text-sm text-slate-700 leading-relaxed relative overflow-hidden shadow-sm">
                         <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                         <p>Hi John,</p>
                         <p className="mt-2">I completely understand your frustration, and I sincerely apologize for the interruptions you've experienced this week. We know how critical uptime is for your business.</p>
                         <p className="mt-2">I have escalated this to our engineering team to ensure stability. Regarding the refund, I have applied a 20% credit to your account for this month as a gesture of goodwill.</p>
                         <p className="mt-2">We value you as an Enterprise partner and are committed to doing better.</p>
                     </div>
                     <div className="flex gap-3 mt-3">
                         <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg shadow-md shadow-teal-500/20 flex items-center gap-2 transition-colors">
                            <Send size={14}/> Approve & Send
                         </button>
                         <button className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-xs font-bold rounded-lg transition-colors shadow-sm">
                            Edit Draft
                         </button>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Right Panel: Smart Actions */}
      <div className="w-80 bg-white border-l border-slate-200 p-6 overflow-y-auto z-10 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2"><Zap size={16} className="text-teal-600"/> Smart Actions</h3>
          
          <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-teal-400 hover:bg-white cursor-pointer transition-all group shadow-sm">
                  <div className="flex items-center gap-2 text-teal-600 text-xs font-bold mb-1">
                      <BookOpen size={14}/> Recommended Article
                  </div>
                  <div className="text-sm text-slate-800 font-medium">SLA Compensation Policy</div>
                  <p className="text-xs text-slate-500 mt-1">Explains refund eligibility for >99.9% downtime.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-white cursor-pointer transition-all group shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-bold mb-1">
                      <MessageSquare size={14}/> Similar Ticket Resolved
                  </div>
                  <div className="text-sm text-slate-800 font-medium">TechGiant Latency Issue</div>
                  <p className="text-xs text-slate-500 mt-1">Resolved by Engineering yesterday. Root cause: CDN.</p>
              </div>
          </div>

          <h3 className="text-sm font-bold text-slate-900 mb-4 mt-8 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600"/> Checklist</h3>
          <div className="space-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center"></div>
                  <span>Check SLA Status</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-teal-500 bg-teal-50 text-teal-600 flex items-center justify-center"><CheckCircle2 size={10}/></div>
                  <span className="text-slate-400 line-through">Check Billing History</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center"></div>
                  <span>Ping Account Manager</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default TicketWorkspace;