import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { Activity, AlertTriangle, Zap, CheckCircle2, GitBranch, Database, Terminal, User, Bot, TrendingUp, Clock } from '../ui/Icons';

// --- Data: Workflow Autonomy (AI vs Human) ---
const autonomyData = [
  { time: '09:00', aiActions: 120, humanInterventions: 5 },
  { time: '10:00', aiActions: 145, humanInterventions: 12 },
  { time: '11:00', aiActions: 160, humanInterventions: 8 },
  { time: '12:00', aiActions: 90, humanInterventions: 2 },
  { time: '13:00', aiActions: 130, humanInterventions: 15 }, // Spike in intervention
  { time: '14:00', aiActions: 170, humanInterventions: 6 },
  { time: '15:00', aiActions: 150, humanInterventions: 4 },
];

// --- Data: SaaS Tool Usage & Errors ---
const saasData = [
  { name: 'Zendesk', ai: 85, human: 15 },
  { name: 'Salesforce', ai: 60, human: 40 }, // High human touch
  { name: 'Jira', ai: 90, human: 10 },
  { name: 'Slack', ai: 95, human: 5 },
];

// --- Data: Intervention Log ---
const interventionLog = [
  { id: 1, time: '13:12', tool: 'Salesforce', action: 'Update Record', user: 'Sarah J.', reason: 'AI Hallucinated Amount', impact: 'High' },
  { id: 2, time: '13:05', tool: 'Jira', action: 'Draft Ticket', user: 'Mike T.', reason: 'Added Missing Context', impact: 'Low' },
  { id: 3, time: '11:45', tool: 'Zendesk', action: 'Send Reply', user: 'Sarah J.', reason: 'Tone Adjustment', impact: 'Medium' },
];

const AnalyticsWorkspace: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-50">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Workflow Intelligence</h2>
          <div className="flex items-center gap-4 text-sm font-mono text-slate-500">
             <span className="flex items-center gap-2"><Bot size={14} className="text-teal-600"/> Riza Core v2.4</span>
             <span>•</span>
             <span>Tracking 4 SaaS Integrations</span>
          </div>
        </div>
        <div className="flex gap-3">
             <button className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
                <Clock size={14}/> Last 24 Hours
             </button>
             <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-bold shadow-md shadow-teal-500/20 flex items-center gap-2">
                <Zap size={14}/> Optimize Workflow
             </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Autonomy Score</div>
                  <Bot size={16} className="text-teal-500"/>
              </div>
              <div className="text-3xl font-bold text-slate-900">94%</div>
              <div className="text-xs text-green-600 mt-1 flex items-center gap-1"><TrendingUp size={12}/> +2.4% vs last week</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Human Interventions</div>
                  <User size={16} className="text-orange-500"/>
              </div>
              <div className="text-3xl font-bold text-slate-900">42</div>
              <div className="text-xs text-slate-500 mt-1">Requires manual override</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Est. Time Saved</div>
                  <Clock size={16} className="text-blue-500"/>
              </div>
              <div className="text-3xl font-bold text-slate-900">18.5h</div>
              <div className="text-xs text-slate-500 mt-1">Across 5 agents</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">System Health</div>
                  <Activity size={16} className="text-green-500"/>
              </div>
              <div className="text-3xl font-bold text-slate-900">99.9%</div>
              <div className="text-xs text-slate-500 mt-1">All Connectors Active</div>
          </div>
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-3 gap-6 mb-8">
          
          {/* Chart 1: Autonomy Trend */}
          <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-80">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <GitBranch size={16} className="text-slate-400"/>
                      Activity Volume vs. Intervention
                  </h3>
                  <div className="flex gap-4 text-xs">
                      <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-500"></div> AI Action</span>
                      <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400"></div> Human Override</span>
                  </div>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={autonomyData}>
                    <defs>
                        <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorHuman" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} dy={10}/>
                    <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} dx={-10}/>
                    <Tooltip 
                        contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0', borderRadius: '8px', fontSize: '12px'}}
                    />
                    <Area type="monotone" dataKey="aiActions" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorAi)" name="AI Actions"/>
                    <Area type="monotone" dataKey="humanInterventions" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorHuman)" name="Intervention"/>
                </AreaChart>
              </ResponsiveContainer>
          </div>

          {/* Chart 2: SaaS Breakdown */}
          <div className="col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-80">
              <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Database size={16} className="text-slate-400"/>
                  SaaS Integration Impact
              </h3>
              <ResponsiveContainer width="100%" height="85%">
                  <BarChart layout="vertical" data={saasData} barSize={20}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={true} vertical={false}/>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={80} stroke="#64748b" fontSize={11} axisLine={false} tickLine={false}/>
                      <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#fff', borderColor: '#e2e8f0', borderRadius: '8px', fontSize: '12px'}} />
                      <Legend iconSize={8} wrapperStyle={{fontSize: '10px'}}/>
                      <Bar dataKey="ai" stackId="a" fill="#14b8a6" radius={[0, 4, 4, 0]} name="Automated"/>
                      <Bar dataKey="human" stackId="a" fill="#cbd5e1" radius={[0, 4, 4, 0]} name="Manual"/>
                  </BarChart>
              </ResponsiveContainer>
          </div>
      </div>

      {/* Intervention Log */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-orange-500"/> 
                  Recent Human Interventions
              </h3>
              <button className="text-xs text-teal-600 font-bold hover:underline">View All Logs</button>
          </div>
          <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-500 font-bold uppercase bg-slate-50/50">
                  <tr>
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">Tool</th>
                      <th className="px-6 py-3">Action</th>
                      <th className="px-6 py-3">User</th>
                      <th className="px-6 py-3">Reason for Override</th>
                      <th className="px-6 py-3">Impact</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                  {interventionLog.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50 transition-colors group">
                          <td className="px-6 py-4 font-mono text-slate-500 text-xs">{log.time}</td>
                          <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                                  log.tool === 'Salesforce' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                  log.tool === 'Jira' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                                  'bg-green-50 text-green-700 border-green-200'
                              }`}>
                                  {log.tool === 'Salesforce' ? <Database size={10}/> : log.tool === 'Jira' ? <Terminal size={10}/> : <CheckCircle2 size={10}/>}
                                  {log.tool}
                              </span>
                          </td>
                          <td className="px-6 py-4 font-medium text-slate-900">{log.action}</td>
                          <td className="px-6 py-4 text-slate-600 flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                  {log.user.charAt(0)}
                              </div>
                              {log.user}
                          </td>
                          <td className="px-6 py-4 text-slate-600 italic">"{log.reason}"</td>
                          <td className="px-6 py-4">
                              <span className={`text-[10px] font-bold uppercase tracking-wide ${
                                  log.impact === 'High' ? 'text-red-600' : 
                                  log.impact === 'Medium' ? 'text-orange-500' : 'text-slate-400'
                              }`}>
                                  {log.impact}
                              </span>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>

    </div>
  );
};

export default AnalyticsWorkspace;