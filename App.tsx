import React, { useState } from 'react';
import Onboarding from './components/Onboarding';
import BrowserNewTab from './components/BrowserNewTab';
import DashboardOverlay from './components/DashboardOverlay';
import { Bot, Box } from './components/ui/Icons';
import { WorkspaceMode } from './types';

function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [initialMode, setInitialMode] = useState<WorkspaceMode>(WorkspaceMode.QUEUE);

  // If onboarding is not complete, show the boot sequence
  if (!isOnboarded) {
    return <Onboarding onComplete={() => setIsOnboarded(true)} />;
  }

  const handleOpenDashboard = (mode: WorkspaceMode = WorkspaceMode.QUEUE) => {
    setInitialMode(mode);
    setIsDashboardOpen(true);
  };

  return (
    <div className="h-screen w-full relative bg-slate-50 overflow-hidden font-sans selection:bg-teal-500 selection:text-white">
      {/* 1. Underlying Browser Landing Page */}
      <BrowserNewTab onNavigate={handleOpenDashboard} />

      {/* 2. Floating Island (Entry Point) */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) z-50 ${isDashboardOpen ? 'translate-y-40 opacity-0 scale-90' : 'translate-y-0 opacity-100 scale-100'}`}
      >
        <button 
            onClick={() => handleOpenDashboard(WorkspaceMode.QUEUE)}
            className="group flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-slate-200 pl-2 pr-6 py-2 rounded-full shadow-2xl hover:border-teal-