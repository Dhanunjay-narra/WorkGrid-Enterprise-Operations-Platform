const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + filePath);
}

// ==========================================
// 1. APPS/WEB (Next.js / React 19 Enterprise Web App)
// ==========================================
write('apps/web/package.json', JSON.stringify({
  name: '@nexora/web',
  version: '2.4.0',
  private: true,
  scripts: {
    dev: 'next dev -p 3000',
    build: 'next build',
    start: 'next start'
  },
  dependencies: {
    '@nexora/types': '*',
    '@nexora/config': '*',
    '@nexora/design-system': '*',
    'react': '^19.0.0',
    'react-dom': '^19.0.0',
    'next': '^15.0.0',
    'lucide-react': '^0.460.0'
  }
}, null, 2));

write('apps/web/src/app/layout.tsx', `
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
`);

write('apps/web/src/app/page.tsx', `
'use client';
import React, { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loadingAgent, setLoadingAgent] = useState(false);

  const handleRunAgent = async (agent: string) => {
    setLoadingAgent(true);
    setTimeout(() => {
      setAiResponse(\`[NEXORA \${agent} AGENT]: Analyzed current operational parameters. Recommended action: Auto-rebalance Q3 project allocation and dispatch expedited supplier purchase order.\`);
      setLoadingAgent(false);
    }, 600);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
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
          <button className="px-4 py-2 bg-[#5E6AD2] text-white hover:bg-[#4E5AC2] text-xs font-semibold rounded-xl shadow-sm transition">
            + Trigger Workflow
          </button>
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
                      <div className="h-full bg-[#5E6AD2]" style={{ width: \`\${p.progress}%\` }} />
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
    </div>
  );
}
`);

write('apps/web/src/app/globals.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --canvas: #FBFBF9;
  --sand: #EFECE6;
  --stone: #E2DFD8;
  --charcoal: #1E2022;
  --sage: #6B8E7B;
  --terracotta: #C27D66;
  --indigo: #5E6AD2;
  --amber: #D99E4B;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--canvas);
  color: var(--charcoal);
}
`);

// ==========================================
// 2. APPS/MOBILE (Cross-Platform Mobile App)
// ==========================================
write('apps/mobile/package.json', JSON.stringify({
  name: '@nexora/mobile',
  version: '2.4.0',
  private: true,
  scripts: {
    start: 'expo start',
    android: 'expo start --android',
    ios: 'expo start --ios'
  },
  dependencies: {
    '@nexora/types': '*',
    'react': '^19.0.0',
    'react-native': '^0.76.0'
  }
}, null, 2));

write('apps/mobile/App.tsx', `
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>NEXORA Mobile</Text>
          <Text style={styles.subtitle}>Enterprise Field & Operations Hub</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📍 Geofenced Attendance</Text>
          <Text style={styles.cardDesc}>Checked in at HQ (San Francisco Campus)</Text>
          <TouchableOpacity style={styles.btnSage}>
            <Text style={styles.btnText}>Clock Out (8h 12m)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧾 Expense OCR Scanner</Text>
          <Text style={styles.cardDesc}>Instant receipt parsing with auto-ledger entry</Text>
          <TouchableOpacity style={styles.btnIndigo}>
            <Text style={styles.btnText}>Scan New Receipt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>💬 Secure Executive Chat</Text>
          <Text style={styles.cardDesc}>End-to-end encrypted direct channel</Text>
          <TouchableOpacity style={styles.btnNeutral}>
            <Text style={styles.btnTextNeutral}>Open Communication Hub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBFBF9' },
  scroll: { padding: 20 },
  header: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '700', color: '#1E2022' },
  subtitle: { fontSize: 13, color: '#1E2022', opacity: 0.6, marginTop: 4 },
  card: { backgroundColor: '#F7F6F3', borderColor: '#E2DFD8', borderWidth: 1, borderRadius: 20, padding: 18, marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#1E2022' },
  cardDesc: { fontSize: 12, color: '#1E2022', opacity: 0.6, marginVertical: 8 },
  btnSage: { backgroundColor: '#6B8E7B', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  btnIndigo: { backgroundColor: '#5E6AD2', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  btnNeutral: { backgroundColor: '#EFECE6', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: '600', fontSize: 13 },
  btnTextNeutral: { color: '#1E2022', fontWeight: '600', fontSize: 13 }
});
`);

// ==========================================
// 3. APPS/ADMIN (Superadmin Control Plane)
// ==========================================
write('apps/admin/package.json', JSON.stringify({
  name: '@nexora/admin',
  version: '2.4.0',
  private: true
}, null, 2));

write('apps/admin/src/index.ts', `
console.log('⚡ NEXORA Superadmin Multi-Tenant Control Plane initialized.');
export const adminRoutes = ['/tenants', '/billing-plans', '/rate-limits', '/feature-flags', '/audit-streams'];
`);

// ==========================================
// 4. APPS/DEVELOPER-PORTAL
// ==========================================
write('apps/developer-portal/package.json', JSON.stringify({
  name: '@nexora/developer-portal',
  version: '2.4.0',
  private: true
}, null, 2));

write('apps/developer-portal/src/index.ts', `
console.log('⚡ NEXORA Developer Portal & OpenAPI Explorer initialized.');
export const developerEndpoints = ['/v1/auth', '/v1/crm', '/v1/hr', '/v1/projects', '/v1/ai/agents', '/v1/workflows'];
`);

console.log('Client applications built successfully.');
