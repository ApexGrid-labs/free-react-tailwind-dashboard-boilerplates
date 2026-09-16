// ApexGrid Labs - Free Open-Source UI Component Core
// Full Commercial License Upgrade: https://whop.com

import React, { useState } from 'react';

export default function SidebarNavigation() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Core Dashboard', icon: '📊' },
    { id: 'analytics', label: 'Performance Nodes', icon: '📈' },
    { id: 'settings', label: 'System Settings', icon: '⚙️' }
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 text-slate-200">
      <div className="space-y-6">
        <div className="flex items-center space-x-3 px-2">
          <span className="text-xl font-bold tracking-wider text-cyan-400">APEXGRID</span>
          <span className="text-xs bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800">v1.0</span>
        </div>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/30' 
                  : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-800 pt-4 px-2 text-center text-xs text-slate-500">
        Commercial Asset Layer Protected
      </div>
    </div>
  );
}
