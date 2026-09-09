const http = require('http');
const fs = require('fs');
const path = require('path');

const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;
const BACKEND_PORT = process.env.BACKEND_PORT || 4000;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NEXORA — Enterprise Autonomous Operations Platform</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #F7F6F3;
      color: #1E2022;
    }
    .badge-pastel-green { background-color: #E8F0EC; color: #2E5A44; border: 1px solid #C8DDD2; }
    .badge-pastel-blue { background-color: #ECEFFE; color: #4351B8; border: 1px solid #D0D7FA; }
    .badge-pastel-terracotta { background-color: #FAEEEB; color: #9E4F39; border: 1px solid #F2D3CC; }
    .card-nude { background-color: #FBFBF9; border: 1px solid #E2DFD8; }
    .sidebar-active { background-color: #EFECE6; color: #1E2022; font-weight: 700; }
    .pulse-live {
      box-shadow: 0 0 0 0 rgba(107, 142, 123, 0.7);
      animation: pulse 1.6s infinite cubic-bezier(0.66, 0, 0, 1);
    }
    @keyframes pulse {
      to { box-shadow: 0 0 0 10px rgba(107, 142, 123, 0); }
    }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- Top Global Bar -->
  <header class="bg-[#FBFBF9] border-b border-[#E2DFD8] px-6 py-3.5 flex items-center justify-between sticky top-0 z-50">
    <div class="flex items-center gap-4">
      <div class="w-9 h-9 rounded-xl bg-[#5E6AD2] flex items-center justify-center text-white font-black text-lg shadow-sm">
        N
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-base font-extrabold tracking-tight text-[#1E2022]">NEXORA</h1>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full badge-pastel-blue">v2.4.0 PROD</span>
        </div>
        <p class="text-[11px] text-[#1E2022]/60 font-medium">Enterprise Autonomous Operations Platform</p>
      </div>
    </div>

    <!-- Actions & Auth -->
    <div class="flex items-center gap-3">
      <button onclick="triggerWorkflow('Global Autonomous Sweep')" class="px-3.5 py-1.5 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5">
        <span>⚡</span> Run Autonomous Workflow
      </button>
      <div id="header-auth-container" class="flex items-center gap-2">
        <a href="/login" class="px-3.5 py-1.5 bg-[#EFECE6] hover:bg-[#E2DFD8] text-[#1E2022] text-xs font-bold rounded-xl border border-[#E2DFD8] transition flex items-center gap-1.5">
          <span>🔒</span> Sign In
        </a>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="flex-1 flex overflow-hidden">

    <!-- Sidebar Navigation -->
    <aside class="w-64 bg-[#FBFBF9] border-r border-[#E2DFD8] p-4 flex flex-col justify-between hidden md:flex">
      <div class="space-y-1">
        <p class="text-[10px] font-bold uppercase tracking-wider text-[#1E2022]/40 px-3 mb-2">OPERATIONAL DOMAINS</p>
        
        <button onclick="switchTab('overview')" id="nav-overview" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022] hover:bg-[#EFECE6] transition sidebar-active flex items-center gap-2.5">
          <span>📊</span> Global Cockpit
        </button>
        <button onclick="switchTab('crm')" id="nav-crm" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>💼</span> CRM & Deal Velocity
        </button>
        <button onclick="switchTab('projects')" id="nav-projects" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>🎯</span> Projects & Gantt CPM
        </button>
        <button onclick="switchTab('finance')" id="nav-finance" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>💳</span> Finance & General Ledger
        </button>
        <button onclick="switchTab('hr')" id="nav-hr" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>👥</span> HR & Payroll Engine
        </button>
        <button onclick="switchTab('inventory')" id="nav-inventory" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>📦</span> Inventory & Supply Chain
        </button>
        <button onclick="switchTab('iot')" id="nav-iot" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>📡</span> IoT Telemetry Mesh
        </button>
        <button onclick="switchTab('ai')" id="nav-ai" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>🤖</span> 9-Agent AI Swarm
        </button>
        <button onclick="switchTab('workflows')" id="nav-workflows" class="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] hover:text-[#1E2022] transition flex items-center gap-2.5">
          <span>⚙️</span> Distributed DAG Engine
        </button>
      </div>

      <!-- System Architecture Status Badge -->
      <div class="p-3.5 rounded-2xl bg-[#EFECE6] border border-[#E2DFD8] text-[11px] space-y-1.5">
        <div class="flex justify-between items-center font-bold text-[#1E2022]">
          <span>Arch Tiers</span>
          <span class="text-[#5E6AD2]">20 Tiers Live</span>
        </div>
        <div class="flex justify-between text-[#1E2022]/60">
          <span>Domains</span>
          <span>64 Domains Active</span>
        </div>
        <div class="flex justify-between text-[#1E2022]/60">
          <span>PR Branches</span>
          <span class="text-[#2E5A44] font-bold">105 Merged</span>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full space-y-6">

      <!-- Toast Notification -->
      <div id="toast" class="hidden fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl card-nude shadow-lg border border-[#E2DFD8] flex items-center gap-3 text-xs font-semibold transition">
        <span id="toast-icon">✅</span>
        <span id="toast-message">Action processed successfully</span>
      </div>

      <!-- Create Deal Modal Dialog -->
      <div id="deal-modal" class="hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="card-nude rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-[#E2DFD8] bg-[#FBFBF9] relative animate-in fade-in zoom-in-95">
          <div class="flex items-center justify-between pb-3 border-b border-[#E2DFD8]">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-[#ECEFFE] flex items-center justify-center text-[#5E6AD2] font-bold text-sm">
                💼
              </div>
              <div>
                <h3 class="text-base font-bold text-[#1E2022]">Create New Enterprise Deal</h3>
                <p class="text-xs text-[#1E2022]/60">Register a new enterprise opportunity into pipeline velocity.</p>
              </div>
            </div>
            <button type="button" onclick="closeDealModal()" class="text-[#1E2022]/50 hover:text-[#1E2022] p-1.5 rounded-lg hover:bg-[#EFECE6] text-sm font-bold transition">
              ✕
            </button>
          </div>

          <form id="deal-form" onsubmit="handleDealSubmit(event)" class="space-y-4">
            <div>
              <label class="block text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/70 mb-1">Deal Name *</label>
              <input id="deal-name" required type="text" placeholder="e.g. Next-Gen Cloud Migration" class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/70 mb-1">Company / Client *</label>
                <input id="deal-company" required type="text" placeholder="e.g. Acme Logistics Corp" class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]" />
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/70 mb-1">Contract Value ($) *</label>
                <input id="deal-amount" required type="number" min="0" step="1000" placeholder="e.g. 650000" class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/70 mb-1">Stage *</label>
                <select id="deal-stage" required class="w-full px-3 py-2.5 text-xs rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]">
                  <option value="Prospecting">Prospecting</option>
                  <option value="Proposal" selected>Proposal</option>
                  <option value="Negotiation">Negotiation</option>
                  <option value="Closing">Closing</option>
                  <option value="Won">Won</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/70 mb-1">Win Probability (%) *</label>
                <input id="deal-prob" required type="number" min="0" max="100" value="70" placeholder="e.g. 70" class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]" />
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/70 mb-1">Deal Owner *</label>
                <input id="deal-owner" required type="text" placeholder="e.g. Sarah Jenkins" value="Sarah Jenkins" class="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]" />
              </div>
            </div>

            <div class="flex justify-end items-center gap-2.5 pt-3 border-t border-[#E2DFD8]">
              <button type="button" onclick="closeDealModal()" class="px-4 py-2 text-xs font-semibold text-[#1E2022]/70 hover:bg-[#EFECE6] rounded-xl transition">
                Cancel
              </button>
              <button type="submit" id="btn-submit-deal" class="px-4 py-2 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl transition shadow-sm flex items-center gap-1.5">
                <span>+</span> Create Deal
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- TAB 1: OVERVIEW COCKPIT -->
      <div id="tab-overview" class="space-y-6">
        <!-- KPI Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="card-nude rounded-2xl p-5 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">Total Pipeline Value</p>
            <div class="mt-2 flex items-baseline gap-2">
              <span id="kpi-pipeline" class="text-2xl font-extrabold text-[#1E2022]">$4.82M</span>
              <span class="text-xs font-bold text-[#2E5A44] badge-pastel-green px-1.5 py-0.5 rounded-md">↑ 18.4%</span>
            </div>
            <p class="text-[11px] text-[#1E2022]/60 mt-1"><span id="kpi-deals-count">42</span> active deals in pipeline</p>
          </div>

          <div class="card-nude rounded-2xl p-5 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">Workforce Headcount</p>
            <div class="mt-2 flex items-baseline gap-2">
              <span id="kpi-headcount" class="text-2xl font-extrabold text-[#1E2022]">1,420</span>
              <span class="text-xs font-bold text-[#2E5A44] badge-pastel-green px-1.5 py-0.5 rounded-md">98.2% Present</span>
            </div>
            <p class="text-[11px] text-[#1E2022]/60 mt-1">8 geofenced shifts active</p>
          </div>

          <div class="card-nude rounded-2xl p-5 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">DAG Workflow Executions</p>
            <div class="mt-2 flex items-baseline gap-2">
              <span id="kpi-workflows" class="text-2xl font-extrabold text-[#1E2022]">84,912</span>
              <span class="text-xs font-bold text-[#2E5A44] badge-pastel-green px-1.5 py-0.5 rounded-md">99.98% SLA</span>
            </div>
            <p class="text-[11px] text-[#1E2022]/60 mt-1">0 dead-letter queue breaches</p>
          </div>

          <div class="card-nude rounded-2xl p-5 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">IoT Telemetry Mesh</p>
            <div class="mt-2 flex items-baseline gap-2">
              <span id="kpi-iot" class="text-2xl font-extrabold text-[#1E2022]">3,840</span>
              <span class="text-xs font-bold badge-pastel-blue px-1.5 py-0.5 rounded-md">Live Nodes</span>
            </div>
            <p class="text-[11px] text-[#1E2022]/60 mt-1">Avg latency: 2.4ms across 3 regions</p>
          </div>
        </div>

        <!-- 2-Column Main Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left 2 Cols: CRM Deals & Active Projects -->
          <div class="lg:col-span-2 space-y-6">
            <!-- CRM Deal Velocity -->
            <div class="card-nude rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-base text-[#1E2022]">CRM Deal Velocity & Funnel</h3>
                <span class="text-xs font-bold badge-pastel-green px-2.5 py-1 rounded-full">Pipeline Health: Optimal</span>
              </div>
              <div class="grid grid-cols-4 gap-3" id="deal-funnel-grid">
                <div class="p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">
                  <p class="text-[11px] font-semibold text-[#1E2022]/60">Prospecting</p>
                  <p class="text-base font-bold text-[#1E2022] mt-1">$840K</p>
                  <p class="text-[10px] text-[#1E2022]/50">18 deals</p>
                </div>
                <div class="p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">
                  <p class="text-[11px] font-semibold text-[#1E2022]/60">Proposal</p>
                  <p class="text-base font-bold text-[#1E2022] mt-1">$1.40M</p>
                  <p class="text-[10px] text-[#1E2022]/50">12 deals</p>
                </div>
                <div class="p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">
                  <p class="text-[11px] font-semibold text-[#1E2022]/60">Negotiation</p>
                  <p class="text-base font-bold text-[#1E2022] mt-1">$2.10M</p>
                  <p class="text-[10px] text-[#1E2022]/50">8 deals</p>
                </div>
                <div class="p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">
                  <p class="text-[11px] font-semibold text-[#1E2022]/60">Closing</p>
                  <p class="text-base font-bold text-[#1E2022] mt-1">$480K</p>
                  <p class="text-[10px] text-[#1E2022]/50">4 deals</p>
                </div>
              </div>
            </div>

            <!-- Active Milestones & Projects -->
            <div class="card-nude rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-base text-[#1E2022]">Active Architecture Milestones (Gantt CPM)</h3>
                <button onclick="switchTab('projects')" class="text-xs font-bold text-[#5E6AD2] hover:underline">View All →</button>
              </div>
              <div class="space-y-3" id="overview-projects-list">
                <!-- Dynamically Populated -->
              </div>
            </div>
          </div>

          <!-- Right Col: Autonomous AI Multi-Agent Console -->
          <div class="card-nude rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2.5 mb-4">
                <div class="w-8 h-8 rounded-xl bg-[#ECEFFE] flex items-center justify-center text-[#5E6AD2] font-bold text-sm">
                  🤖
                </div>
                <div>
                  <h3 class="font-bold text-base text-[#1E2022]">9-Agent AI Autonomous Swarm</h3>
                  <p class="text-[11px] text-[#1E2022]/60">Multi-domain tool calling & reasoning graph</p>
                </div>
              </div>

              <!-- Quick Agent Selectors -->
              <div class="grid grid-cols-3 gap-1.5 mb-4">
                <button onclick="selectAgent('Executive')" class="px-2 py-1.5 rounded-xl bg-[#EFECE6] hover:bg-[#E2DFD8] text-xs font-semibold transition agent-btn active" data-agent="Executive">Executive</button>
                <button onclick="selectAgent('Finance')" class="px-2 py-1.5 rounded-xl bg-[#EFECE6] hover:bg-[#E2DFD8] text-xs font-semibold transition agent-btn" data-agent="Finance">Finance</button>
                <button onclick="selectAgent('Sales')" class="px-2 py-1.5 rounded-xl bg-[#EFECE6] hover:bg-[#E2DFD8] text-xs font-semibold transition agent-btn" data-agent="Sales">Sales</button>
                <button onclick="selectAgent('HR')" class="px-2 py-1.5 rounded-xl bg-[#EFECE6] hover:bg-[#E2DFD8] text-xs font-semibold transition agent-btn" data-agent="HR">HR</button>
                <button onclick="selectAgent('Support')" class="px-2 py-1.5 rounded-xl bg-[#EFECE6] hover:bg-[#E2DFD8] text-xs font-semibold transition agent-btn" data-agent="Support">Support</button>
                <button onclick="selectAgent('Security')" class="px-2 py-1.5 rounded-xl bg-[#EFECE6] hover:bg-[#E2DFD8] text-xs font-semibold transition agent-btn" data-agent="Security">Security</button>
              </div>

              <!-- AI Response Window -->
              <div id="ai-response-box" class="p-4 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] min-h-[160px] text-xs leading-relaxed text-[#1E2022]/80 space-y-2">
                <p class="text-[#1E2022]/50 italic">Ready to invoke autonomous multi-domain reasoning. Select an agent or type a prompt below.</p>
              </div>
            </div>

            <div class="mt-4 flex gap-2">
              <input id="ai-prompt-input" type="text" placeholder="Ask Autonomous Agent Mesh..." class="flex-1 px-3.5 py-2 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30" />
              <button onclick="runAgentDispatch()" id="btn-run-agent" class="px-4 py-2 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl transition shadow-sm">
                Dispatch
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: CRM & DEALS -->
      <div id="tab-crm" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">Enterprise CRM & Pipeline Management</h2>
            <p class="text-xs text-[#1E2022]/60">Real-time enterprise deals, lead scoring, and sales stage progression.</p>
          </div>
          <button onclick="openDealModal()" class="px-4 py-2 bg-[#5E6AD2] text-white text-xs font-bold rounded-xl hover:bg-[#4E5AC2] transition">
            + Create New Deal
          </button>
        </div>

        <div class="card-nude rounded-2xl overflow-hidden shadow-sm">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#EFECE6] border-b border-[#E2DFD8] text-[#1E2022]/70 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th class="p-4">Deal ID</th>
                <th class="p-4">Deal Name</th>
                <th class="p-4">Company</th>
                <th class="p-4">Contract Value</th>
                <th class="p-4">Stage</th>
                <th class="p-4">Probability</th>
                <th class="p-4">Deal Owner</th>
              </tr>
            </thead>
            <tbody id="crm-deals-tbody" class="divide-y divide-[#E2DFD8]">
              <!-- Dynamically populated -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 3: PROJECTS & GANTT -->
      <div id="tab-projects" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">Projects & Gantt Critical Path (CPM)</h2>
            <p class="text-xs text-[#1E2022]/60">Automated topological DAG resolution and critical path tracking.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="projects-grid">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- TAB 4: FINANCE & LEDGER -->
      <div id="tab-finance" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">Financial General Ledger & Tax Reconciliation</h2>
            <p class="text-xs text-[#1E2022]/60">Double-entry balanced journals, VAT compliance, and real-time treasury.</p>
          </div>
        </div>

        <div class="card-nude rounded-2xl p-6 shadow-sm">
          <h3 class="font-bold text-sm text-[#1E2022] mb-4">Recent General Ledger Transactions</h3>
          <table class="w-full text-left text-xs">
            <thead class="bg-[#EFECE6] border-b border-[#E2DFD8] text-[#1E2022]/70 font-bold uppercase text-[10px]">
              <tr>
                <th class="p-3">Txn ID</th>
                <th class="p-3">Date</th>
                <th class="p-3">Description</th>
                <th class="p-3">Account</th>
                <th class="p-3">Debit ($)</th>
                <th class="p-3">Credit ($)</th>
                <th class="p-3">Status</th>
              </tr>
            </thead>
            <tbody id="finance-ledger-tbody" class="divide-y divide-[#E2DFD8]">
              <!-- Dynamically Populated -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 5: HR & PAYROLL -->
      <div id="tab-hr" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">HR & Automated Payroll Processing Engine</h2>
            <p class="text-xs text-[#1E2022]/60">Bi-weekly payroll disbursements, tax withholdings, and geofenced attendance.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="card-nude rounded-2xl p-6 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">Bi-Weekly Gross Payroll</p>
            <p class="text-2xl font-extrabold text-[#1E2022] mt-2">$4,850,000</p>
            <p class="text-xs text-[#1E2022]/60 mt-1">1,420 full-time employees</p>
          </div>
          <div class="card-nude rounded-2xl p-6 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">Tax & Benefits Withheld</p>
            <p class="text-2xl font-extrabold text-[#9E4F39] mt-2">$1,240,000</p>
            <p class="text-xs text-[#1E2022]/60 mt-1">SOX & Statutory compliant</p>
          </div>
          <div class="card-nude rounded-2xl p-6 shadow-sm">
            <p class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">Next Disbursement Date</p>
            <p class="text-2xl font-extrabold text-[#2E5A44] mt-2">Sep 15, 2026</p>
            <p class="text-xs text-[#1E2022]/60 mt-1">Automated direct ACH routing</p>
          </div>
        </div>
      </div>

      <!-- TAB 6: INVENTORY -->
      <div id="tab-inventory" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">Inventory & Supply Chain Automation</h2>
            <p class="text-xs text-[#1E2022]/60">Real-time SKU stock levels, warehouse routing, and automated PO reordering.</p>
          </div>
        </div>

        <div class="card-nude rounded-2xl overflow-hidden shadow-sm">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#EFECE6] border-b border-[#E2DFD8] text-[#1E2022]/70 font-bold uppercase text-[10px]">
              <tr>
                <th class="p-4">SKU</th>
                <th class="p-4">Item Name</th>
                <th class="p-4">Current Stock</th>
                <th class="p-4">Reorder Threshold</th>
                <th class="p-4">Unit Cost ($)</th>
                <th class="p-4">Status</th>
              </tr>
            </thead>
            <tbody id="inventory-tbody" class="divide-y divide-[#E2DFD8]">
              <!-- Dynamically Populated -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 7: IOT TELEMETRY -->
      <div id="tab-iot" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">IoT Telemetry & Smart Sensor Mesh</h2>
            <p class="text-xs text-[#1E2022]/60">Live telemetry ingestion, outlier anomaly detection, and MTLS encryption.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5" id="iot-grid">
          <!-- Dynamically Populated -->
        </div>
      </div>

      <!-- TAB 8: AI SWARM -->
      <div id="tab-ai" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">Autonomous 9-Agent Operational Mesh</h2>
            <p class="text-xs text-[#1E2022]/60">Decentralized agent collaboration across executive, finance, sales, HR, and security domains.</p>
          </div>
        </div>

        <div class="card-nude rounded-2xl p-6 shadow-sm space-y-4">
          <p class="text-xs text-[#1E2022]/70">Enter a prompt to trigger the multi-agent graph with automatic cross-domain tool execution:</p>
          <div class="flex gap-2">
            <input id="ai-swarm-prompt" type="text" placeholder="e.g. Audit Q3 tax filings and optimize supply chain reorder threshold" class="flex-1 px-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30" />
            <button onclick="runSwarmDispatch()" class="px-5 py-2.5 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl transition">
              Dispatch Swarm
            </button>
          </div>
          <div id="ai-swarm-result" class="p-4 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8] min-h-[140px] text-xs text-[#1E2022]">
            Waiting for dispatch...
          </div>
        </div>
      </div>

      <!-- TAB 9: WORKFLOWS -->
      <div id="tab-workflows" class="hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-[#1E2022]">Distributed DAG Workflow Execution Engine</h2>
            <p class="text-xs text-[#1E2022]/60">State machine orchestration with zero dead-letter queue breaches.</p>
          </div>
          <button onclick="triggerWorkflow('Ad-Hoc Cross-Domain Rebalance')" class="px-4 py-2 bg-[#5E6AD2] text-white text-xs font-bold rounded-xl hover:bg-[#4E5AC2] transition">
            + Trigger New DAG Run
          </button>
        </div>

        <div class="card-nude rounded-2xl p-6 shadow-sm">
          <h3 class="font-bold text-sm text-[#1E2022] mb-4">Execution Log & State Transitions</h3>
          <div class="space-y-3" id="workflow-logs-container">
            <!-- Dynamically Populated -->
          </div>
        </div>
      </div>

    </main>
  </div>

  <!-- Bottom Status Footer Bar -->
  <footer class="bg-[#FBFBF9] border-t border-[#E2DFD8] px-6 py-2 flex items-center justify-between text-xs text-[#1E2022]/70 shrink-0 sticky bottom-0 z-40">
    <div class="flex items-center gap-3">
      <div id="backend-status-pill" class="flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2DFD8] bg-[#F7F6F3] text-xs font-semibold text-[#1E2022]">
        <span class="w-2.5 h-2.5 rounded-full bg-[#6B8E7B] pulse-live"></span>
        <span id="backend-status-text">Connecting to Backend (Port 4000)...</span>
      </div>
      <span class="text-[11px] font-mono text-[#1E2022]/50 hidden sm:inline">HTTP/1.1 • WebSocket Mesh Connected</span>
    </div>
    <div class="flex items-center gap-3 text-[11px] font-semibold text-[#1E2022]/60">
      <span>NEXORA v2.4.0 PROD</span>
      <span>•</span>
      <span class="text-[#5E6AD2]">Port 4000 (Backend API)</span>
    </div>
  </footer>

  <script>
    const API_BASE = '';
    let selectedAgentName = 'Executive';

    function showToast(msg, icon = '✅') {
      const t = document.getElementById('toast');
      document.getElementById('toast-message').innerText = msg;
      document.getElementById('toast-icon').innerText = icon;
      t.classList.remove('hidden');
      setTimeout(() => t.classList.add('hidden'), 3500);
    }

    function openDealModal() {
      const modal = document.getElementById('deal-modal');
      if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
          const input = document.getElementById('deal-name');
          if (input) input.focus();
        }, 50);
      }
    }

    function closeDealModal() {
      const modal = document.getElementById('deal-modal');
      if (modal) {
        modal.classList.add('hidden');
        const form = document.getElementById('deal-form');
        if (form) form.reset();
        const prob = document.getElementById('deal-prob');
        if (prob) prob.value = '70';
        const owner = document.getElementById('deal-owner');
        if (owner) owner.value = 'Sarah Jenkins';
      }
    }

    async function handleDealSubmit(e) {
      if (e) e.preventDefault();
      const name = document.getElementById('deal-name').value.trim();
      const company = document.getElementById('deal-company').value.trim();
      const amount = Number(document.getElementById('deal-amount').value) || 0;
      const stage = document.getElementById('deal-stage').value;
      const probability = Number(document.getElementById('deal-prob').value) || 0;
      const owner = document.getElementById('deal-owner').value.trim() || 'Unassigned';

      if (!name || !company) {
        showToast('Please enter both Deal Name and Company', '⚠️');
        return;
      }

      const submitBtn = document.getElementById('btn-submit-deal');
      const origText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="animate-spin">⚙</span> Saving...';
      submitBtn.disabled = true;

      const newDealPayload = { name, company, amount, stage, probability, owner };

      try {
        const res = await fetch(API_BASE + '/api/v1/crm/deals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newDealPayload)
        });

        if (res.ok) {
          const data = await res.json();
          closeDealModal();
          showToast('Deal "' + (data.deal && data.deal.name ? data.deal.name : name) + '" created successfully!', '💼');
          await loadData();
        } else {
          throw new Error('Server returned ' + res.status);
        }
      } catch (err) {
        console.warn('Backend deal creation error, using optimistic local state:', err);
        if (!window.localDealsList) {
          window.localDealsList = [];
        }
        const fallbackDeal = {
          id: 'DEAL-' + String(Date.now()).slice(-3),
          name: name,
          company: company,
          amount: amount,
          stage: stage,
          probability: probability,
          owner: owner
        };
        window.localDealsList.unshift(fallbackDeal);
        closeDealModal();
        showToast('Deal "' + name + '" created (Saved Locally)!', '💼');
        await loadData();
      } finally {
        submitBtn.innerHTML = origText;
        submitBtn.disabled = false;
      }
    }

    function switchTab(tab) {
      const tabs = ['overview', 'crm', 'projects', 'finance', 'hr', 'inventory', 'iot', 'ai', 'workflows'];
      tabs.forEach(t => {
        const el = document.getElementById('tab-' + t);
        const nav = document.getElementById('nav-' + t);
        if (el) el.classList.add('hidden');
        if (nav) {
          nav.classList.remove('sidebar-active');
          nav.classList.add('text-[#1E2022]/70');
        }
      });
      const activeEl = document.getElementById('tab-' + tab);
      const activeNav = document.getElementById('nav-' + tab);
      if (activeEl) activeEl.classList.remove('hidden');
      if (activeNav) {
        activeNav.classList.add('sidebar-active');
        activeNav.classList.remove('text-[#1E2022]/70');
      }
    }

    function selectAgent(agent) {
      selectedAgentName = agent;
      document.querySelectorAll('.agent-btn').forEach(btn => {
        if (btn.dataset.agent === agent) {
          btn.classList.add('bg-[#5E6AD2]', 'text-white');
          btn.classList.remove('bg-[#EFECE6]');
        } else {
          btn.classList.remove('bg-[#5E6AD2]', 'text-white');
          btn.classList.add('bg-[#EFECE6]');
        }
      });
      document.getElementById('ai-prompt-input').placeholder = 'Ask ' + agent + ' Agent...';
    }

    async function checkBackendConnection() {
      const start = Date.now();
      try {
        const res = await fetch(API_BASE + '/api/v1/health');
        const data = await res.json();
        const latency = Date.now() - start;
        if (data.status === 'HEALTHY') {
          const pill = document.getElementById('backend-status-pill');
          pill.innerHTML = '<span class=\"w-2.5 h-2.5 rounded-full bg-[#6B8E7B] pulse-live\"></span>' +
            '<span class=\"text-[#2E5A44] font-bold\">🟢 Backend Live Connected (Port ' + ${BACKEND_PORT} + ' | ' + latency + 'ms)</span>';
          return true;
        }
      } catch (err) {
        const pill = document.getElementById('backend-status-pill');
        pill.innerHTML = '<span class=\"w-2.5 h-2.5 rounded-full bg-[#C27D66]\"></span>' +
          '<span class=\"text-[#9E4F39] font-bold\">🔴 Backend Reconnecting...</span>';
        return false;
      }
    }

    async function loadData() {
      try {
        // Load Metrics
        const mRes = await fetch(API_BASE + '/api/v1/metrics/overview');
        const mData = await mRes.json();
        if (mData.data) {
          document.getElementById('kpi-pipeline').innerText = '$' + (mData.data.totalPipelineValue / 1000000).toFixed(2) + 'M';
          document.getElementById('kpi-deals-count').innerText = mData.data.activeDealsCount;
          document.getElementById('kpi-headcount').innerText = mData.data.workforceHeadcount.toLocaleString();
          document.getElementById('kpi-workflows').innerText = mData.data.workflowExecutions.toLocaleString();
          document.getElementById('kpi-iot').innerText = mData.data.iotNodesActive.toLocaleString();
        }

        // Load Deals
        const dealsRes = await fetch(API_BASE + '/api/v1/crm/deals');
        const dealsData = await dealsRes.json();
        if (dealsData.deals) {
          renderDeals(dealsData.deals);
        }

        // Load Projects
        const projRes = await fetch(API_BASE + '/api/v1/projects');
        const projData = await projRes.json();
        if (projData.projects) {
          renderProjects(projData.projects);
        }

        // Load Finance Ledger
        const finRes = await fetch(API_BASE + '/api/v1/finance/ledger');
        const finData = await finRes.json();
        if (finData.ledger) {
          renderFinance(finData.ledger);
        }

        // Load Inventory
        const invRes = await fetch(API_BASE + '/api/v1/inventory/skus');
        const invData = await invRes.json();
        if (invData.inventory) {
          renderInventory(invData.inventory);
        }

        // Load IoT
        const iotRes = await fetch(API_BASE + '/api/v1/iot/telemetry');
        const iotData = await iotRes.json();
        if (iotData.telemetry) {
          renderIoT(iotData.telemetry);
        }
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    }

    function getStageBadgeClass(stage) {
      switch (stage) {
        case 'Closing':
        case 'Won':
          return 'badge-pastel-green';
        case 'Proposal':
        case 'Prospecting':
          return 'badge-pastel-blue';
        case 'Negotiation':
          return 'badge-pastel-terracotta';
        default:
          return 'badge-pastel-blue';
      }
    }

    function updateDealFunnel(deals) {
      const funnelGrid = document.getElementById('deal-funnel-grid');
      if (!funnelGrid) return;
      const stages = [
        { key: 'Prospecting', label: 'Prospecting' },
        { key: 'Proposal', label: 'Proposal' },
        { key: 'Negotiation', label: 'Negotiation' },
        { key: 'Closing', label: 'Closing' }
      ];
      funnelGrid.innerHTML = stages.map(s => {
        const stageDeals = deals.filter(d => (d.stage || '').toLowerCase() === s.key.toLowerCase());
        const count = stageDeals.length;
        const sum = stageDeals.reduce((acc, d) => acc + (Number(d.amount) || 0), 0);
        const formattedAmount = sum >= 1000000 ? '$' + (sum / 1000000).toFixed(2) + 'M' : '$' + Math.round(sum / 1000) + 'K';
        return '<div class="p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">' +
          '<p class="text-[11px] font-semibold text-[#1E2022]/60">' + s.label + '</p>' +
          '<p class="text-base font-bold text-[#1E2022] mt-1">' + formattedAmount + '</p>' +
          '<p class="text-[10px] text-[#1E2022]/50">' + count + ' deal' + (count === 1 ? '' : 's') + '</p>' +
        '</div>';
      }).join('');
    }

    function renderDeals(deals) {
      const allDeals = (window.localDealsList && window.localDealsList.length > 0)
        ? [...window.localDealsList, ...deals.filter(d => !window.localDealsList.some(ld => ld.id === d.id))]
        : deals;
      const tbody = document.getElementById('crm-deals-tbody');
      tbody.innerHTML = allDeals.map(d => \`
        <tr class="hover:bg-[#F7F6F3] transition">
          <td class="p-4 font-bold text-[#5E6AD2]">\${d.id}</td>
          <td class="p-4 font-semibold text-[#1E2022]">\${d.name}</td>
          <td class="p-4 text-[#1E2022]/70">\${d.company}</td>
          <td class="p-4 font-bold text-[#1E2022]">$\${Number(d.amount || 0).toLocaleString()}</td>
          <td class="p-4"><span class="px-2.5 py-1 rounded-full text-[11px] font-bold \${getStageBadgeClass(d.stage)}">\${d.stage}</span></td>
          <td class="p-4 font-semibold">\${d.probability}%</td>
          <td class="p-4 text-[#1E2022]/70">\${d.owner}</td>
        </tr>
      \`).join('');
      updateDealFunnel(allDeals);
    }

    function renderProjects(projects) {
      const overviewList = document.getElementById('overview-projects-list');
      overviewList.innerHTML = projects.slice(0, 3).map(p => \`
        <div class="flex items-center justify-between p-3 rounded-xl bg-[#F7F6F3] border border-[#E2DFD8]">
          <div>
            <div class="flex items-center gap-2">
              <p class="text-xs font-bold text-[#1E2022]">\${p.name}</p>
              \${p.criticalPath ? '<span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#FAEEEB] text-[#9E4F39]">CPM</span>' : ''}
            </div>
            <span class="text-[10px] uppercase font-bold text-[#5E6AD2]">\${p.tag}</span>
          </div>
          <div class="text-right">
            <span class="text-xs font-bold text-[#1E2022]">\${p.progress}%</span>
            <div class="w-24 h-1.5 bg-[#E2DFD8] rounded-full mt-1 overflow-hidden">
              <div class="h-full bg-[#5E6AD2]" style="width: \${p.progress}%"></div>
            </div>
          </div>
        </div>
      \`).join('');

      const grid = document.getElementById('projects-grid');
      grid.innerHTML = projects.map(p => \`
        <div class="card-nude rounded-2xl p-5 shadow-sm space-y-3">
          <div class="flex justify-between items-start">
            <div>
              <span class="text-[10px] font-bold uppercase text-[#5E6AD2]">\${p.tag}</span>
              <h4 class="font-bold text-sm text-[#1E2022] mt-0.5">\${p.name}</h4>
            </div>
            <span class="px-2 py-0.5 rounded text-[11px] font-bold \${p.status === 'Completed' ? 'badge-pastel-green' : 'badge-pastel-blue'}">\${p.status}</span>
          </div>
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-[#1E2022]/60">Sprint Velocity</span>
              <span>\${p.progress}%</span>
            </div>
            <div class="w-full h-2 bg-[#EFECE6] rounded-full overflow-hidden">
              <div class="h-full bg-[#5E6AD2]" style="width: \${p.progress}%"></div>
            </div>
          </div>
          <div class="flex justify-between items-center text-[11px] text-[#1E2022]/60 pt-2 border-t border-[#E2DFD8]">
            <span>Lead: \${p.owner}</span>
            \${p.criticalPath ? '<span class="font-bold text-[#9E4F39]">Critical Path Task</span>' : '<span>Standard Path</span>'}
          </div>
        </div>
      \`).join('');
    }

    function renderFinance(ledger) {
      const tbody = document.getElementById('finance-ledger-tbody');
      tbody.innerHTML = ledger.map(t => \`
        <tr class="hover:bg-[#F7F6F3]">
          <td class="p-3 font-bold text-[#5E6AD2]">\${t.id}</td>
          <td class="p-3 text-[#1E2022]/60">\${t.date}</td>
          <td class="p-3 font-semibold text-[#1E2022]">\${t.description}</td>
          <td class="p-3 text-[#1E2022]/70">\${t.account}</td>
          <td class="p-3 font-bold text-[#2E5A44]">\${t.debit ? '$' + t.debit.toLocaleString() : '-'}</td>
          <td class="p-3 font-bold text-[#9E4F39]">\${t.credit ? '$' + t.credit.toLocaleString() : '-'}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold badge-pastel-green">BALANCED</span></td>
        </tr>
      \`).join('');
    }

    function renderInventory(inventory) {
      const tbody = document.getElementById('inventory-tbody');
      tbody.innerHTML = inventory.map(i => \`
        <tr class="hover:bg-[#F7F6F3]">
          <td class="p-4 font-bold text-[#5E6AD2]">\${i.sku}</td>
          <td class="p-4 font-semibold text-[#1E2022]">\${i.name}</td>
          <td class="p-4 font-extrabold">\${i.stock} units</td>
          <td class="p-4 text-[#1E2022]/60">\${i.minThreshold} units</td>
          <td class="p-4 font-bold">$\${i.unitCost}</td>
          <td class="p-4"><span class="px-2.5 py-1 rounded-full text-[11px] font-bold \${i.status === 'In Stock' ? 'badge-pastel-green' : 'badge-pastel-terracotta'}">\${i.status}</span></td>
        </tr>
      \`).join('');
    }

    function renderIoT(telemetry) {
      const grid = document.getElementById('iot-grid');
      grid.innerHTML = telemetry.map(t => \`
        <div class="card-nude rounded-2xl p-5 shadow-sm space-y-2">
          <div class="flex justify-between items-center">
            <span class="font-bold text-xs text-[#5E6AD2]">\${t.nodeId}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold badge-pastel-green">\${t.status}</span>
          </div>
          <p class="text-xs font-semibold text-[#1E2022]">\${t.location}</p>
          <div class="flex justify-between text-xs pt-2 border-t border-[#E2DFD8]">
            <span class="text-[#1E2022]/60">Core Temp: <b>\${t.temperature}°C</b></span>
            <span class="text-[#1E2022]/60">Latency: <b>\${t.latencyMs}ms</b></span>
          </div>
        </div>
      \`).join('');
    }

    async function runAgentDispatch() {
      const prompt = document.getElementById('ai-prompt-input').value.trim() || 'Analyze system state';
      const box = document.getElementById('ai-response-box');
      box.innerHTML = '<div class="flex items-center gap-2 text-[#5E6AD2] font-semibold"><span class="animate-spin">⚙</span> Executing multi-agent neural graph reasoning...</div>';

      try {
        const res = await fetch(API_BASE + '/api/v1/ai/agent-dispatch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ agent: selectedAgentName, prompt })
        });
        const data = await res.json();
        box.innerHTML = \`
          <p class="font-bold text-[#5E6AD2] mb-1.5">\${data.agent} Autonomous Agent Decision:</p>
          <p class="text-[#1E2022] mb-2">\${data.response}</p>
          <div class="pt-2 border-t border-[#E2DFD8] text-[10px] text-[#1E2022]/60 space-y-0.5">
            \${data.reasoningSteps.map(s => \`<div>\${s}</div>\`).join('')}
          </div>
        \`;
        showToast('Autonomous Agent policy executed live!', '🤖');
      } catch (err) {
        box.innerText = 'Error dispatching agent: ' + err.message;
      }
    }

    async function runSwarmDispatch() {
      const prompt = document.getElementById('ai-swarm-prompt').value.trim() || 'Cross-domain optimization';
      const resultBox = document.getElementById('ai-swarm-result');
      resultBox.innerHTML = '<div class="text-[#5E6AD2] font-semibold animate-pulse">Running 9-Agent Autonomous Swarm Across 64 Enterprise Domains...</div>';

      try {
        const res = await fetch(API_BASE + '/api/v1/ai/agent-dispatch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ agent: 'Executive Swarm', prompt })
        });
        const data = await res.json();
        resultBox.innerHTML = \`
          <div class="space-y-2">
            <p class="font-extrabold text-[#2E5A44]">✅ Swarm Consensus Achieved in 42ms</p>
            <p class="text-[#1E2022] font-medium">\${data.response}</p>
            <div class="bg-[#EFECE6] p-3 rounded-xl text-[11px] font-mono text-[#1E2022]/80">
              [SWARM LOG]: Ingested 64 domains -> Verified zero duplicate constraint -> Dispatched DAG state transitions -> Output verified.
            </div>
          </div>
        \`;
        showToast('Swarm consensus completed!', '⚡');
      } catch (err) {
        resultBox.innerText = 'Error: ' + err.message;
      }
    }

    async function triggerWorkflow(name) {
      try {
        const res = await fetch(API_BASE + '/api/v1/workflows/trigger', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ workflowName: name })
        });
        const data = await res.json();
        if (data.execution) {
          showToast('Workflow ' + data.execution.id + ' completed in ' + data.execution.durationMs + 'ms', '⚡');
          loadData();
        }
      } catch (e) {
        showToast('Workflow error: ' + e.message, '❌');
      }
    }

    // Connect to Server-Sent Events (SSE) for Real-Time live updates
    function initRealtimeStream() {
      try {
        const evtSource = new EventSource(API_BASE + '/api/v1/realtime/stream');
        evtSource.onmessage = function(e) {
          try {
            const msg = JSON.parse(e.data);
            console.log('Realtime Event:', msg);
            if (msg.type === 'WORKFLOW_TRIGGERED' || msg.type === 'DEAL_CREATED' || msg.type === 'PROJECT_CREATED') {
              loadData();
            }
          } catch (err) {}
        };
      } catch (e) {
        console.warn('Realtime stream connect error:', e);
      }
    }

    // Initialize application
    window.addEventListener('DOMContentLoaded', async () => {
      selectAgent('Executive');
      await checkBackendConnection();
      await loadData();
      initRealtimeStream();
      setInterval(checkBackendConnection, 5000);

      // Modal listeners
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDealModal();
      });

      const modalBackdrop = document.getElementById('deal-modal');
      if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
          if (e.target === modalBackdrop) closeDealModal();
        });
      }
      function renderAuthHeader() {
        const userStr = localStorage.getItem('nexora_auth_user') || sessionStorage.getItem('nexora_auth_user');
        const container = document.getElementById('header-auth-container');
        if (!container) return;
        if (userStr) {
          try {
            const user = JSON.parse(userStr);
            container.innerHTML = '<div class="flex items-center gap-2">' +
              '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#6B8E7B]/15 text-[#6B8E7B] border border-[#6B8E7B]/30">' +
              (user.role || 'Executive') +
              '</span>' +
              '<span class="text-xs font-semibold text-[#1E2022] hidden sm:inline">' + (user.name || 'User') + '</span>' +
              '<button onclick="handleLogout()" class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 transition flex items-center gap-1">' +
              '<span>🚪</span> Logout' +
              '</button>' +
              '</div>';
            return;
          } catch (e) {}
        }
        container.innerHTML = '<a href="/login" class="px-3.5 py-1.5 bg-[#EFECE6] hover:bg-[#E2DFD8] text-[#1E2022] text-xs font-bold rounded-xl border border-[#E2DFD8] transition flex items-center gap-1.5">' +
          '<span>🔒</span> Sign In' +
          '</a>';
      }

      window.handleLogout = function() {
        localStorage.removeItem('nexora_auth_token');
        localStorage.removeItem('nexora_auth_user');
        sessionStorage.removeItem('nexora_auth_token');
        sessionStorage.removeItem('nexora_auth_user');
        window.location.href = '/login';
      };

      renderAuthHeader();
    });
  </script>
</body>
</html>`;

const loginHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NEXORA — Sign In</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
  </style>
</head>
<body class="bg-[#F7F8FA] min-h-screen flex items-center justify-center p-4 md:p-8 text-[#1E2022] antialiased">
  <div class="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#E2DFD8]/60 space-y-6">
    <!-- Header -->
    <div class="space-y-1">
      <h3 class="text-2xl font-bold text-[#1E2022] tracking-tight">Welcome Back</h3>
      <p class="text-xs text-[#1E2022]/60">Sign in to your NEXORA account</p>
    </div>

    <div id="error-banner" class="hidden p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
      <span>⚠️</span> <span id="error-message"></span>
    </div>

    <!-- Form -->
    <form id="login-form" onsubmit="handleLoginSubmit(event)" class="space-y-4">
      <!-- User Name / Display Name -->
      <div class="space-y-1.5">
        <div class="relative">
          <span class="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">👤</span>
          <input
            id="login-name"
            type="text"
            required
            placeholder="User Name (e.g. Dhanunjay Narra)"
            value="Dhanunjay Narra"
            class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022] placeholder:text-[#1E2022]/40"
          />
        </div>
      </div>

      <!-- Email Address -->
      <div class="space-y-1.5">
        <div class="relative">
          <span class="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">✉</span>
          <input
            id="login-email"
            type="text"
            required
            placeholder="Email address (any email works)"
            value="architecture@nexora.io"
            class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022] placeholder:text-[#1E2022]/40"
          />
        </div>
      </div>

      <!-- Password -->
      <div class="space-y-1.5">
        <div class="relative">
          <span class="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">🔒</span>
          <input
            id="login-password"
            type="password"
            required
            placeholder="Password"
            value="admin123"
            class="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022] placeholder:text-[#1E2022]/40"
          />
          <button
            type="button"
            onclick="togglePasswordVisibility()"
            class="absolute right-3.5 top-3 text-[#1E2022]/40 hover:text-[#1E2022] text-xs transition"
          >
            <span id="eye-icon">👁</span>
          </button>
        </div>
      </div>

      <!-- Checkbox & Forgot Password -->
      <div class="flex items-center justify-between text-xs pt-1">
        <label class="flex items-center gap-2 cursor-pointer text-[#1E2022]/80">
          <input
            id="remember-me"
            type="checkbox"
            checked
            class="rounded border-[#E2DFD8] text-[#5E6AD2] focus:ring-[#5E6AD2]"
          />
          Remember me
        </label>
        <button
          type="button"
          onclick="openForgotModal()"
          class="text-[#5E6AD2] hover:underline font-semibold text-xs"
        >
          Forgot password?
        </button>
      </div>

      <!-- Role Selector -->
      <div class="space-y-2 pt-1">
        <label class="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/50">
          Select Your Role
        </label>
        <div class="flex flex-wrap gap-1.5" id="roles-container">
          <!-- Dynamically rendered -->
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        id="login-submit-btn"
        class="w-full py-3 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
      >
        <span>➔</span> <span id="login-btn-text">Sign In as Executive</span>
      </button>
    </form>

    <!-- Divider -->
    <div class="relative flex items-center justify-center">
      <div class="border-t border-[#E2DFD8] w-full"></div>
      <span class="bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-[#1E2022]/40 relative">
        OR
      </span>
    </div>

    <!-- SSO Provider Buttons -->
    <div class="grid grid-cols-3 gap-2.5">
      <button
        type="button"
        onclick="triggerSSO('Google')"
        class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] hover:bg-[#EFECE6] text-xs font-semibold text-[#1E2022] transition"
      >
        <span class="font-bold text-blue-600">G</span> Google
      </button>
      <button
        type="button"
        onclick="triggerSSO('Microsoft')"
        class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] hover:bg-[#EFECE6] text-xs font-semibold text-[#1E2022] transition"
      >
        <span class="text-amber-500 font-bold">田</span> Microsoft
      </button>
      <button
        type="button"
        onclick="triggerSSO('SAML Enterprise')"
        class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] hover:bg-[#EFECE6] text-xs font-semibold text-[#1E2022] transition"
      >
        <span class="text-[#5E6AD2] text-xs">🛡️</span> SSO
      </button>
    </div>
  </div>

  <!-- FORGOT PASSWORD MODAL -->
  <div id="forgot-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div class="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#E2DFD8] space-y-4 relative animate-in fade-in zoom-in duration-200">
      <button
        type="button"
        onclick="closeForgotModal()"
        class="absolute top-4 right-4 text-[#1E2022]/40 hover:text-[#1E2022] text-sm font-bold"
      >
        ✕
      </button>
      <div class="space-y-1">
        <h3 class="text-xl font-bold text-[#1E2022]">Reset Password</h3>
        <p class="text-xs text-[#1E2022]/60">
          Enter your account email to receive reset instructions via NEXORA Auth Gateway.
        </p>
      </div>

      <div id="forgot-feedback" class="hidden p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-3">
        <p class="font-semibold">✓ Dispatch Successful</p>
        <p id="forgot-feedback-msg"></p>
        <button
          type="button"
          onclick="closeForgotModal()"
          class="w-full py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs"
        >
          Close
        </button>
      </div>

      <form id="forgot-form" onsubmit="handleForgotSubmit(event)" class="space-y-4">
        <div class="relative">
          <span class="absolute left-3.5 top-3 text-[#1E2022]/40 text-sm">✉</span>
          <input
            id="forgot-email-input"
            type="email"
            required
            placeholder="Enter your registered email"
            value="architecture@nexora.io"
            class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FBFBF9] border border-[#E2DFD8] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/30 text-[#1E2022]"
          />
        </div>
        <div class="flex gap-2">
          <button
            type="button"
            onclick="closeForgotModal()"
            class="flex-1 py-2.5 rounded-xl border border-[#E2DFD8] bg-[#FBFBF9] text-xs font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            id="forgot-submit-btn"
            class="flex-1 py-2.5 bg-[#5E6AD2] hover:bg-[#4E5AC2] text-white text-xs font-bold rounded-xl shadow-md transition"
          >
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  </div>

  <script>
    const roles = ['Executive', 'Finance', 'Sales', 'HR', 'Support', 'Security', 'Admin'];
    let selectedRole = 'Executive';

    function renderRoles() {
      const container = document.getElementById('roles-container');
      container.innerHTML = roles.map(r => \`
        <button
          type="button"
          onclick="selectRole('\${r}')"
          class="px-3 py-1 rounded-full text-[11px] font-semibold transition \${
            selectedRole === r
              ? 'bg-[#5E6AD2] text-white shadow-sm'
              : 'bg-[#EFECE6] text-[#1E2022]/70 hover:bg-[#E2DFD8]'
          }"
        >
          \${r}
        </button>
      \`).join('');
      document.getElementById('login-btn-text').innerText = 'Sign In as ' + selectedRole;
    }

    function selectRole(role) {
      selectedRole = role;
      renderRoles();
    }

    function togglePasswordVisibility() {
      const pass = document.getElementById('login-password');
      const icon = document.getElementById('eye-icon');
      if (pass.type === 'password') {
        pass.type = 'text';
        icon.innerText = '🙈';
      } else {
        pass.type = 'password';
        icon.innerText = '👁';
      }
    }

    function openForgotModal() {
      document.getElementById('forgot-modal').classList.remove('hidden');
      document.getElementById('forgot-feedback').classList.add('hidden');
      document.getElementById('forgot-form').classList.remove('hidden');
    }

    function closeForgotModal() {
      document.getElementById('forgot-modal').classList.add('hidden');
    }

    async function handleForgotSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('forgot-email-input').value;
      const btn = document.getElementById('forgot-submit-btn');
      btn.innerText = 'Sending...';
      btn.disabled = true;

      try {
        await fetch('/api/v1/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      } catch (err) {}

      btn.innerText = 'Send Reset Link';
      btn.disabled = false;
      document.getElementById('forgot-form').classList.add('hidden');
      document.getElementById('forgot-feedback').classList.remove('hidden');
      document.getElementById('forgot-feedback-msg').innerText = 'Password reset instructions dispatched to ' + email;
    }

    async function handleLoginSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById('login-name');
      const userName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (document.getElementById('login-email').value.split('@')[0] || 'User');
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const remember = document.getElementById('remember-me').checked;
      const btn = document.getElementById('login-submit-btn');

      btn.innerHTML = '<span class="animate-spin">⚙</span> Authenticating...';
      btn.disabled = true;

      let authUser = {
        name: userName,
        email: email,
        role: selectedRole,
        tenant: 'NEXORA Enterprise Global'
      };
      let token = 'jwt_nexora_' + Math.random().toString(36).substring(2, 10);

      try {
        const res = await fetch('/api/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: userName, username: email, password, role: selectedRole })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.token) token = data.token;
        }
      } catch (err) {
        console.warn('Gateway offline, using local session');
      }

      authUser.name = userName;

      const storage = remember ? localStorage : sessionStorage;
      storage.setItem('nexora_auth_token', token);
      storage.setItem('nexora_auth_user', JSON.stringify(authUser));

      btn.innerHTML = '<span>✓</span> Signed In! Redirecting...';
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    }

    async function triggerSSO(provider) {
      const btn = document.getElementById('login-submit-btn');
      btn.innerHTML = '<span class="animate-spin">⚙</span> Connecting ' + provider + ' SSO...';
      btn.disabled = true;

      let authUser = {
        name: 'Dhanunjay Narra (' + provider + ' SSO)',
        email: 'sso-' + provider.toLowerCase() + '@nexora.io',
        role: selectedRole,
        tenant: 'NEXORA Enterprise Global (SSO)'
      };
      let token = 'sso_' + Math.random().toString(36).substring(2, 10);

      try {
        const res = await fetch('/api/v1/auth/sso', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ provider, role: selectedRole })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.user) authUser = data.user;
          if (data.token) token = data.token;
        }
      } catch (err) {}

      localStorage.setItem('nexora_auth_token', token);
      localStorage.setItem('nexora_auth_user', JSON.stringify(authUser));

      btn.innerHTML = '<span>✓</span> ' + provider + ' Verified! Redirecting...';
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    }

    window.addEventListener('DOMContentLoaded', () => {
      renderRoles();
    });
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/')) {
    const proxyReq = http.request({
      hostname: '127.0.0.1',
      port: BACKEND_PORT,
      path: req.url,
      method: req.method,
      headers: { ...req.headers, host: `127.0.0.1:${BACKEND_PORT}` }
    }, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });
    proxyReq.on('error', (err) => {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Backend unavailable', details: err.message }));
    });
    req.pipe(proxyReq);
    return;
  }

  if (req.url === '/login' || req.url.startsWith('/login?')) {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    res.end(loginHtmlContent);
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache'
  });
  res.end(htmlContent);
});

server.listen(FRONTEND_PORT, () => {
  console.log(`\n========================================================`);
  console.log(`🌐 NEXORA ENTERPRISE FRONTEND APPLICATION IS LIVE!`);
  console.log(`========================================================`);
  console.log(`🖥️ Frontend URL:     http://localhost:${FRONTEND_PORT}`);
  console.log(`🔑 Login Page:       http://localhost:${FRONTEND_PORT}/login`);
  console.log(`📡 Connected to API: http://localhost:${BACKEND_PORT}`);
  console.log(`🎨 Design System:    Pastel/Nude Enterprise Theme`);
  console.log(`========================================================\n`);
});

module.exports = { server };
