import React, { useState, useEffect } from 'react';
import { WorkspaceMode } from '../types';
import AgentSidebar from './AgentSidebar';
import QueueWorkspace from './workspaces/ExperimentWorkspace'; // Mapped to Queue
import TicketWorkspace from './workspaces/TriageWorkspace'; // Mapped to Ticket
import AnalyticsWorkspace from './workspaces/ReleaseWorkspace'; // Mapped to Analytics
import { Activity, AlertTriangle, MessageSquare, Search, Box, Settings, ArrowLeft, Bot, Inbox, BookOpen, Users } from './ui/Icons';

interface DashboardOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode: WorkspaceMode;
}

const DashboardOverlay: React.FC<DashboardOverlayProps> = ({ isOpen, onClose, initialMode }) => {
  const [activeMode, setActiveMode] = useState<WorkspaceMode>(initialMode);

  useEffect(() => {
    if (isOpen) {
        setActiveMode(initialMode);
    }
  }, [isOpen, initialMode]);

  // Simulated context data that changes based on view
  const getContextData = () => {
    switch (activeMode) {
      case WorkspaceMode.QUEUE:
        return { queueLength: 32, urgentCount: 3, averageSentiment: 0.4 };
      case WorkspaceMode.TICKET:
        return { ticketId: '#4492', customer: 'Acme Corp', tier: 'Enterprise', sentiment: -0.6 };
      case WorkspaceMode.ANALYTICS:
        return { csat: 4.2, responseTime: '45m', trend: 'down' };
      default:
        return {};
    }
  };

  const renderWorkspace = () => {
    switch (activeMode) {
      case WorkspaceMode.QUEUE:
        return <QueueWorkspace />; // Maps to ExperimentWorkspace file
      case WorkspaceMode.TICKET:
        return <TicketWorkspace />; // Maps to TriageWorkspace file
      case WorkspaceMode.ANALYTICS:
        return <AnalyticsWorkspace />; // Maps to ReleaseWorkspace file
      case WorkspaceMode.KNOWLEDGE:
        return (
            <div className="flex-1 flex items-center justify-center bg-slate-50 text-slate-400 font-mono flex-col gap-4">
                <BookOpen size={48} className="text-slate-300" />
                <span>Knowledge Base Indexing...</span>
            </div>
        );
      default:
        return <QueueWorkspace />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-40 bg-slate-50 text-slate-800 font-sans flex flex-col animate-in slide-in-from-bottom-20 fade-in duration-500">
      
      {/* simplified Top Bar */}
      <div className="h-16 flex items-center px-6 justify-between shrink-0 z-10 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center gap-6">
          {/* Back Button */}
          <button 
            onClick={onClose}
            className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors group"
            title="Back to Browser"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="h-8 w-px bg-slate-200"></div>

          {/* Logo / Brand */}
          <div className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-3">
             <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md shadow-teal-500/20">
                <Bot size={18} className="text-white"/>
             </div>
             <span className="hidden md:inline">Riza</span>
          </div>
          
          {/* Minimalist Workspace Switcher */}
          <div className="flex bg-slate-100 rounded-lg p-1 ml-4 gap-1 border border-slate-200">
            {[
              { id: WorkspaceMode.QUEUE, icon: <Inbox size={14} />, label: 'Queue' },
              { id: WorkspaceMode.TICKET, icon: <MessageSquare size={14} />, label: 'Ticket #4492' },
              { id: WorkspaceMode.ANALYTICS, icon: <Activity size={14} />, label: 'Analytics' },
              { id: WorkspaceMode.KNOWLEDGE, icon: <BookOpen size={14} />, label: 'Knowledge' },
            ].map(tab => (
                 <button 
                    key={tab.id}
                    onClick={() => setActiveMode(tab.id as WorkspaceMode)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2 ${activeMode === tab.id ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                >
                    {tab.icon} {tab.label}
                </button>
            ))}
          </div>
        </div>

        {/* Simplified Intent Bar */}
        <div className="flex-1 max-w-xl mx-8 relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={14} className="text-slate-400 group-focus-within:text-teal-600 transition-colors" />
            </div>
            <input 
                type="text" 
                placeholder="Ask Riza about tickets, policies, or customer history..." 
                className="w-full bg-slate-100 border border-transparent rounded-full py-2 pl-9 pr-4 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all placeholder-slate-400"
            />
        </div>

        {/* User / Status */}
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-green-700 tracking-wide uppercase">Online</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 border border-white shadow-sm"></div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Simplified Left Nav (Rail) */}
        <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-8 shrink-0">
            <div className="text-slate-400 hover:text-teal-600 cursor-pointer transition-colors"><Inbox size={20} /></div>
            <div className="text-slate-400 hover:text-teal-600 cursor-pointer transition-colors"><Users size={20} /></div>
            <div className="text-slate-400 hover:text-teal-600 cursor-pointer transition-colors"><BookOpen size={20} /></div>
            <div className="mt-auto text-slate-400 hover:text-teal-600 cursor-pointer transition-colors"><Settings size={20} /></div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 flex overflow-hidden relative bg-slate-50">
            {renderWorkspace()}
            
            {/* Agent Sidebar */}
            <AgentSidebar mode={activeMode} contextData={getContextData()} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverlay;