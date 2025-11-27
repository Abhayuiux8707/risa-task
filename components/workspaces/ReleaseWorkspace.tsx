import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, Tooltip, CartesianGrid, AreaChart, Area, YAxis } from 'recharts';
import { Smile, Clock, TrendingUp, Users } from '../ui/Icons';

const csatData = [
  { time: 'Mon', score: 4.5 },
  { time: 'Tue', score: 4.6 },
  { time: 'Wed', score: 4.2 }, // Dip
  { time: 'Thu', score: 4.3 }, 
  { time: 'Fri', score: 4.7 }, 
  { time: 'Sat', score: 4.8 },
];

const topicVolume = [
  { name: 'Billing', value: 35, color: '#f87171' }, // Red-400
  { name: 'Technical', value: 45, color: '#2dd4bf' }, // Teal-400
  { name: 'Feature Req', value: 20, color: '#60a5fa' }, // Blue-400
];

const AnalyticsWorkspace: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-50">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Team Operations</h2>
          <div className="flex items-center gap-4 text-sm font-mono">
            <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-200 font-bold text-xs">LIVE METRICS</span>
            <span className="text-slate-500">Region: Global</span>
          </div>
        </div>
        <div className="flex items-center gap-6 bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-right">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Avg Response Time</div>
                <div className="text-2xl font-mono text-slate-900 font-bold">45m</div>
            </div>
            <div className="h-8 w-px bg-slate-100"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">CSAT (7 Days)</div>
                <div className="text-2xl font-mono text-teal-600 font-bold">4.6/5</div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Topic Volume Pie */}
          <div className="col-span-1 bg-white p-8 rounded-xl border border-slate-200 flex flex-col items-center justify-center shadow-sm">
             <h3 className="text-xs font-mono text-slate-400 uppercase mb-6 tracking-wider w-full text-left">Ticket Topics</h3>
             <div className="w-56 h-56 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={topicVolume}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                             {topicVolume.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0', borderRadius: '8px', color: '#0f172a'}} itemStyle={{color: '#0f172a'}} />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-slate-900">124</span>
                    <span className="text-xs text-slate-500 uppercase font-medium mt-1">Active</span>
                </div>
             </div>
             <div className="w-full mt-4 flex justify-between px-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-teal-400"></div> Technical</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div> Billing</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Feat.</span>
             </div>
          </div>

          <div className="col-span-2 space-y-6">
             {/* Health Cards */}
             <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-slate-500 font-medium">Customer Satisfaction</span>
                        <Smile size={18} className="text-teal-500" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">4.6</div>
                    <div className="text-xs text-green-600 mt-2 flex items-center gap-1"><TrendingUp size={12}/> +0.2 vs last week</div>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-slate-500 font-medium">Active Agents</span>
                        <Users size={18} className="text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">12/15</div>
                    <div className="text-xs text-slate-400 mt-2">3 on break</div>
                 </div>
             </div>

             {/* Live Metric Chart */}
             <div className="bg-white p-6 rounded-xl border border-slate-200 flex-1 h-72 shadow-sm">
                <h3 className="text-xs font-mono text-slate-400 uppercase mb-4 tracking-wider">CSAT Trend (This Week)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={csatData}>
                         <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                        <XAxis dataKey="time" stroke="#94a3b8" tick={{fontSize: 10}} axisLine={false} tickLine={false} dy={5} />
                        <YAxis domain={[3, 5]} stroke="#94a3b8" tick={{fontSize: 10}} axisLine={false} tickLine={false} dx={-5} />
                        <Tooltip contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0', fontSize: '12px', borderRadius: '8px', color: '#0f172a'}} itemStyle={{color: '#0f172a'}} />
                        <Area type="monotone" dataKey="score" stroke="#2dd4bf" strokeWidth={2} fill="url(#colorScore)" />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>
      </div>
      
      {/* Insight Block */}
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-1.5 bg-teal-50 rounded-md">
                <TrendingUp size={16} className="text-teal-600"/>
            </div>
            <h3 className="text-sm font-bold text-slate-900">Weekly Performance Insight</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Billing inquiries have spiked by 15% due to the new pricing rollout. 
            However, response times have remained stable (45m). 
            CSAT dipped slightly on Wednesday but recovered.
            <br/><br/>
            <span className="text-slate-900 font-bold">Recommendation:</span> Update the "Pricing FAQ" macro to reduce handle time on billing tickets.
          </p>
      </div>
    </div>
  );
};

export default AnalyticsWorkspace;