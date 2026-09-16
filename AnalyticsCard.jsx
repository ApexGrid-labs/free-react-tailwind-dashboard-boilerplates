// ApexGrid Labs - Free Open-Source UI Component Core
// Full Commercial License Upgrade: https://whop.com

import React from 'react';

export default function AnalyticsCard() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-xl flex flex-col justify-between space-y-4 max-w-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            SaaS Monthly Recurring Revenue
          </p>
          <h3 className="text-3xl font-bold tracking-tight text-white">
            $48,259.00
          </h3>
        </div>
        <div className="p-2 bg-emerald-950/50 border border-emerald-800 text-emerald-400 text-sm rounded-lg">
          📈 +14.2%
        </div>
      </div>
      
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div className="bg-cyan-500 h-full w-[78%] rounded-full animate-pulse" />
      </div>

      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-400 font-medium">Target Cap Achievement</span>
        <span className="text-cyan-400 font-bold font-mono">78%</span>
      </div>
    </div>
  );
}
