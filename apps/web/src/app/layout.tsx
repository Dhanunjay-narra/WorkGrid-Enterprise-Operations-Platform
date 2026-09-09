import React from 'react';
import './globals.css';

export const metadata = {
  title: 'NEXORA — Enterprise Autonomous Operations Platform',
  description: 'Mission-critical enterprise ERP, CRM, HR, Workflow, and AI Multi-Agent platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FBFBF9] text-[#1E2022] antialiased selection:bg-[#5E6AD2]/20 selection:text-[#1E2022]">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 border-r border-[#E2DFD8] bg-[#F7F6F3] p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-[#5E6AD2] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  N
                </div>
                <div>
                  <h1 className="font-bold text-base tracking-tight text-[#1E2022]">NEXORA</h1>
                  <p className="text-[10px] uppercase font-semibold text-[#1E2022]/50 tracking-wider">Enterprise Suite</p>
                </div>
              </div>

              <nav className="space-y-1 text-sm font-medium">
                <a href="#overview" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#EFECE6] text-[#1E2022] transition">
                  <span>📊</span> Overview
                </a>
                <a href="#crm" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>🎯</span> CRM & Deals
                </a>
                <a href="#hr" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>👥</span> HR & Workforce
                </a>
                <a href="#projects" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>📁</span> Projects & Gantt
                </a>
                <a href="#finance" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>💳</span> Finance & Ledger
                </a>
                <a href="#inventory" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>📦</span> Supply & SKUs
                </a>
                <a href="#support" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>🎧</span> Support & SLAs
                </a>
                <a href="#workflow" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>⚡</span> Workflow DAG
                </a>
                <a href="#ai" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>🤖</span> AI 9-Agent Mesh
                </a>
                <a href="#iot" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6]/60 text-[#1E2022]/80 transition">
                  <span>📡</span> IoT Fleet
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E2DFD8] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6B8E7B] text-white flex items-center justify-center text-xs font-semibold">
                DN
              </div>
              <div className="text-xs">
                <p className="font-semibold text-[#1E2022]">Dhanunjay Narra</p>
                <p className="text-[10px] text-[#1E2022]/60">Principal Architect</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
