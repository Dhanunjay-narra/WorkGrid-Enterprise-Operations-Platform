'use client';
import React, { useState } from 'react';
import WorkflowPage from './workflow/page';

export default function DashboardPage() {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loadingAgent, setLoadingAgent] = useState(false);

  const handleRunAgent = async (agent: string) => {
    setLoadingAgent(true);
    setTimeout(() => {
      setAiResponse(`[NEXORA ${agent} AGENT]: Analyzed current operational parameters. Recommended action: Auto-rebalance Q3 project allocation and dispatch expedited supplier purchase order.`);
      setLoadingAgent(false);
    }, 600);
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1E2022]">Global Enterprise Cockpit</h2>
          <p className="text-xs text-[#1E2022]/60 mt-1">Real-time autonomous metrics across all 16 operational domains.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#EFECE6] text-[#1E2022] hover:bg-[#E2DFD8] text-xs font-semibold rounded-xl transition">
            Export BI Report
          </button>
          <a href="/workflow" className="px-4 py-2 bg-[#5E6AD2] text-white hover:bg-[#4E5AC2] text-xs font-semibold rounded-xl shadow-sm transition inline-block">
            + Trigger Workflow
          </a>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/60">Total Pipeline Value</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#1E2022]">$4.82M</span>
            <span className="text-xs font-bold text-[#6B8E7B]">↑ 18.4%</span>
          </div>
          <p className="text-[11px] text-[#1E2022]/50 mt-1">42 active deals closing this quarter</p>
        </div>

        <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/60">Workforce Headcount</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#1E2022]">1,420</span>
            <span className="text-xs font-bold text-[#6B8E7B]">98.2% Present</span>
          </div>
          <p className="text-[11px] text-[#1E2022]/50 mt-1">8 geofenced shifts active</p>
        </div>

        <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/60">Workflow DAG Executions</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#1E2022]">84,912</span>
            <span className="text-xs font-bold text-[#6B8E7B]">99.98% SLA</span>
          </div>
          <p className="text-[11px] text-[#1E2022]/50 mt-1">0 dead-letter queue breaches</p>
        </div>

        <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/60">IoT Telemetry Ingest</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#1E2022]">3,840</span>
            <span className="text-xs font-semibold text-[#5E6AD2]">Live Nodes</span>
          </div>
          <p className="text-[11px] text-[#1E2022]/50 mt-1">Avg response latency: 2.4ms</p>
        </div>
      </div>

      {/* Main Grid: Interactive Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: CRM & Projects */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-base text-[#1E2022]">CRM Deal Velocity & Stages</h3>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#6B8E7B]/15 text-[#3F5A4D]">
                Pipeline Health: Optimal
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { stage: 'Prospecting', count: 18, val: '$840K' },
                { stage: 'Proposal', count: 12, val: '$1.4M' },
                { stage: 'Negotiation', count: 8, val: '$2.1M' },
                { stage: 'Closing', count: 4, val: '$480K' },
              ].map((s, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">
                  <p className="text-xs font-semibold text-[#1E2022]/70">{s.stage}</p>
                  <p className="text-base font-bold text-[#1E2022] mt-1">{s.val}</p>
                  <p className="text-[11px] text-[#1E2022]/50">{s.count} deals</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-base text-[#1E2022] mb-4">Active Sprint & Milestones (Project Hub)</h3>
            <div className="space-y-3">
              {[
                { title: 'Nexus Enterprise Multi-Tenant Engine v2', progress: 88, status: 'In Progress', tag: 'Architecture' },
                { title: 'Automated SAP/Salesforce Bidirectional Sync', progress: 65, status: 'Testing', tag: 'Integrations' },
                { title: 'Zero-Trust Passkey & WebAuthn Rollout', progress: 100, status: 'Completed', tag: 'Security' },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]/70">
                  <div>
                    <p className="text-xs font-semibold text-[#1E2022]">{p.title}</p>
                    <span className="text-[10px] uppercase font-bold text-[#5E6AD2]">{p.tag}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#1E2022]">{p.progress}%</span>
                    <div className="w-24 h-1.5 bg-[#E2DFD8] rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-[#5E6AD2]" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: AI Autonomous Agent Console */}
        <div className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🤖</span>
              <div>
                <h3 className="font-bold text-base text-[#1E2022]">AI 9-Agent Operational Mesh</h3>
                <p className="text-[11px] text-[#1E2022]/60">Direct multi-agent dispatch & tool orchestration</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {['Executive', 'Finance', 'Sales', 'HR', 'Support', 'Security'].map((agent) => (
                <button
                  key={agent}
                  onClick={() => handleRunAgent(agent)}
                  className="px-2.5 py-2 text-xs font-medium bg-[#EFECE6] hover:bg-[#E2DFD8] rounded-xl text-[#1E2022] transition"
                >
                  {agent}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] min-h-[140px] text-xs leading-relaxed text-[#1E2022]/80">
              {loadingAgent ? (
                <div className="flex items-center gap-2 text-[#5E6AD2] font-semibold">
                  <span className="animate-spin">⚙</span> Dispatching across autonomous multi-agent graph...
                </div>
              ) : aiResponse ? (
                aiResponse
              ) : (
                'Select an agent or type a prompt to invoke autonomous reasoning and multi-domain tool calling.'
              )}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Ask Executive Assistant..."
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30"
            />
            <button
              onClick={() => handleRunAgent('Executive')}
              className="px-3.5 py-2 bg-[#5E6AD2] text-white text-xs font-semibold rounded-xl hover:bg-[#4E5AC2] transition"
            >
              Run
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Full Interactive Workflow DAG Execution Engine */}
      <section id="workflow" className="pt-6 border-t border-[#E2DFD8]">
        <WorkflowPage />
      </section>
    </div>
  );
}
