import React from 'react';
import Link from 'next/link';
import './globals.css';
import { AppShell } from '../components/AppShell';

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
          <aside className="w-64 border-r border-[#E2DFD8] bg-[#F7F6F3] p-6 flex flex-col justify-between shrink-0">
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

              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1E2022]/50 px-1">
                Operational Domains
              </div>

              <nav className="space-y-1 text-xs font-semibold">
                <Link href="/" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022] transition">
                  <span>📊</span> Global Cockpit
                </Link>
                <Link href="/crm" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>🎯</span> CRM & Deal Velocity
                </Link>
                <Link href="/projects" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>📁</span> Projects & Gantt CPM
                </Link>
                <Link href="/finance" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>💳</span> Finance & General Ledger
                </Link>
                <Link href="/hr" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>👥</span> HR & Payroll Engine
                </Link>
                <Link href="/inventory" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>📦</span> Inventory & Supply Chain
                </Link>
                <Link href="/iot" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>📡</span> IoT Telemetry Mesh
                </Link>
                <Link href="/ai" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[#EFECE6] text-[#1E2022]/80 transition">
                  <span>🤖</span> 9 - Agent AI Swarm
                </Link>
                <Link href="/workflow" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#EFECE6] text-[#1E2022] transition border border-[#E2DFD8]">
                  <span>⚡</span> Distributed DAG Engine
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-[#EFECE6] rounded-xl border border-[#E2DFD8] text-[11px]">
                <div className="flex justify-between font-bold text-[#1E2022]">
                  <span>Arch Tiers</span>
                  <span className="text-[#5E6AD2]">20 Tiers Live</span>
                </div>
                <div className="flex justify-between text-[#1E2022]/60 mt-1">
                  <span>Domains</span>
                  <span>64 Domains Active</span>
                </div>
                <div className="flex justify-between text-[#1E2022]/60 mt-1">
                  <span>PR Branches</span>
                  <span className="text-[#6B8E7B] font-bold">105 Merged</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DFD8] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6B8E7B] text-white flex items-center justify-center text-xs font-semibold">
                  DN
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-[#1E2022]">Dhanunjay Narra</p>
                  <p className="text-[10px] text-[#1E2022]/60">Principal Architect</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Header Bar */}
            <header className="h-16 border-b border-[#E2DFD8] bg-[#FBFBF9]/80 backdrop-blur px-8 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#5E6AD2] text-white font-bold flex items-center justify-center text-xs">
                  N
                </div>
                <span className="font-bold text-sm text-[#1E2022]">NEXORA</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20">
                  v2.4.0 PROD
                </span>
                <span className="text-xs text-[#1E2022]/50">Enterprise Autonomous Operations Platform</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E2DFD8] text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#6B8E7B] animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#1E2022]">Backend Live Connected (Port 4000 | 6ms)</span>
                </div>

                <Link
                  href="/workflow"
                  className="px-4 py-2 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2"
                >
                  <span>⚡</span> Run Autonomous Workflow
                </Link>

                <Link
                  href="/login"
                  className="px-3.5 py-2 bg-[#EFECE6] hover:bg-[#E2DFD8] text-[#1E2022] text-xs font-bold rounded-xl border border-[#E2DFD8] transition flex items-center gap-1.5"
                >
                  <span>🔒</span> Sign In
                </Link>
              </div>
            </header>

            {/* View Content Body */}
            <main className="flex-1 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
