'use client';

import React from 'react';
import Link from 'next/link';
import { AuthProvider, useAuth } from '../context/AuthContext';

function HeaderAndSidebar({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, logout, switchRole } = useAuth();

  return (
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

          <div className="pt-4 border-t border-[#E2DFD8]">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#5E6AD2] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="text-xs truncate">
                    <p className="font-semibold text-[#1E2022] truncate">{user.name}</p>
                    <p className="text-[10px] text-[#5E6AD2] font-semibold">{user.role} Role</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  title="Sign Out"
                  className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-600 transition text-xs shrink-0"
                >
                  🚪
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="w-full py-2 bg-[#5E6AD2] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
              >
                <span>🔒</span> Sign In
              </Link>
            )}
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
            {user && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#6B8E7B]/15 text-[#6B8E7B] border border-[#6B8E7B]/30">
                {user.role}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="http://localhost:4000/api/v1/export/logins.xlsx"
              download
              className="px-3.5 py-2 bg-[#E8F0EC] hover:bg-[#D5E5DC] text-[#2E5A44] border border-[#C8DDD2] text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5"
              title="Download Excel report of all user logins"
            >
              <span>📊</span> Download Login Excel
            </a>

            <Link
              href="/workflow"
              className="px-4 py-2 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2"
            >
              <span>⚡</span> Run Autonomous Workflow
            </Link>

            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#1E2022] font-semibold hidden md:inline">
                  {user.name || user.email}
                </span>
                <button
                  onClick={logout}
                  className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 transition flex items-center gap-1.5"
                >
                  <span>🚪</span> Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-3.5 py-2 bg-[#EFECE6] hover:bg-[#E2DFD8] text-[#1E2022] text-xs font-bold rounded-xl border border-[#E2DFD8] transition flex items-center gap-1.5"
              >
                <span>🔒</span> Sign In
              </Link>
            )}
          </div>
        </header>

        {/* View Content Body */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>

        {/* Bottom Status Footer Bar */}
        <footer className="h-10 border-t border-[#E2DFD8] bg-[#FBFBF9]/90 backdrop-blur px-8 flex items-center justify-between shrink-0 text-xs text-[#1E2022]/70">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium">NEXORA Operations Network &copy; 2026</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#E2DFD8]">
            <span className="w-2 h-2 rounded-full bg-[#6B8E7B] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#1E2022]">Backend Live Connected (Port 4000 | SQLite: Connected | 6ms)</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <HeaderAndSidebar>{children}</HeaderAndSidebar>
    </AuthProvider>
  );
}

