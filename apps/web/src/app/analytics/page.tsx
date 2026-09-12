'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ──────────────────────────────────────────────
   DATA — extracted from every page in the app
   ────────────────────────────────────────────── */

interface SliceData {
  label: string;
  value: number;
  color: string;
}

interface ChartConfig {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  data: SliceData[];
  valuePrefix?: string;
  valueSuffix?: string;
}

const chartsData: Record<string, ChartConfig[]> = {
  /* ── CRM (from dashboard page.tsx) ── */
  crm: [
    {
      id: 'crm-pipeline',
      title: 'CRM Deal Pipeline by Stage',
      subtitle: 'Total Pipeline: $4.82M — 42 active deals',
      icon: '🎯',
      category: 'crm',
      data: [
        { label: 'Prospecting', value: 840, color: '#5E6AD2' },
        { label: 'Proposal', value: 1400, color: '#6B8E7B' },
        { label: 'Negotiation', value: 2100, color: '#D99E4B' },
        { label: 'Closing', value: 480, color: '#C27D66' },
      ],
      valuePrefix: '$',
      valueSuffix: 'K',
    },
    {
      id: 'crm-deals-count',
      title: 'Deal Count by Stage',
      subtitle: '42 deals across 4 stages',
      icon: '📈',
      category: 'crm',
      data: [
        { label: 'Prospecting', value: 18, color: '#5E6AD2' },
        { label: 'Proposal', value: 12, color: '#6B8E7B' },
        { label: 'Negotiation', value: 8, color: '#D99E4B' },
        { label: 'Closing', value: 4, color: '#C27D66' },
      ],
      valueSuffix: ' deals',
    },
  ],

  /* ── Projects (from dashboard page.tsx) ── */
  projects: [
    {
      id: 'sprint-progress',
      title: 'Active Sprint Completion',
      subtitle: '3 milestones tracked',
      icon: '📁',
      category: 'projects',
      data: [
        { label: 'Multi-Tenant Engine v2', value: 88, color: '#5E6AD2' },
        { label: 'SAP/Salesforce Sync', value: 65, color: '#D99E4B' },
        { label: 'WebAuthn Rollout', value: 100, color: '#6B8E7B' },
      ],
      valueSuffix: '%',
    },
    {
      id: 'project-tags',
      title: 'Projects by Category',
      subtitle: 'Architecture, Integrations, Security',
      icon: '🏗',
      category: 'projects',
      data: [
        { label: 'Architecture', value: 1, color: '#5E6AD2' },
        { label: 'Integrations', value: 1, color: '#D99E4B' },
        { label: 'Security', value: 1, color: '#6B8E7B' },
      ],
      valueSuffix: ' project(s)',
    },
  ],

  /* ── Workforce / HR ── */
  workforce: [
    {
      id: 'workforce-attendance',
      title: 'Workforce Attendance',
      subtitle: '1,420 total headcount — 8 geofenced shifts',
      icon: '👥',
      category: 'workforce',
      data: [
        { label: 'Present', value: 98.2, color: '#6B8E7B' },
        { label: 'Absent', value: 1.8, color: '#C27D66' },
      ],
      valueSuffix: '%',
    },
    {
      id: 'ai-agents',
      title: 'AI 9-Agent Mesh Distribution',
      subtitle: '9 autonomous agents — multi-domain orchestration',
      icon: '🤖',
      category: 'workforce',
      data: [
        { label: 'Executive', value: 1, color: '#5E6AD2' },
        { label: 'Finance', value: 1, color: '#6B8E7B' },
        { label: 'Sales', value: 1, color: '#D99E4B' },
        { label: 'HR', value: 1, color: '#C27D66' },
        { label: 'Support', value: 1, color: '#8B6BBF' },
        { label: 'Security', value: 1, color: '#4A9EBF' },
        { label: 'Project', value: 1, color: '#BF7A4A' },
        { label: 'Inventory', value: 1, color: '#7BBF4A' },
        { label: 'Analytics', value: 1, color: '#BF4A6B' },
      ],
      valueSuffix: ' agent',
    },
  ],

  /* ── Platform Metrics ── */
  platform: [
    {
      id: 'kpi-overview',
      title: 'Global KPI Metrics Distribution',
      subtitle: 'Real-time autonomous metrics across all domains',
      icon: '📊',
      category: 'platform',
      data: [
        { label: 'Pipeline Value ($4.82M)', value: 4820, color: '#5E6AD2' },
        { label: 'DAG Executions (84,912)', value: 84912, color: '#6B8E7B' },
        { label: 'IoT Nodes (3,840)', value: 3840, color: '#D99E4B' },
        { label: 'Workforce (1,420)', value: 1420, color: '#C27D66' },
      ],
    },
    {
      id: 'workflow-sla',
      title: 'Workflow DAG SLA Performance',
      subtitle: '84,912 executions — 99.98% SLA met',
      icon: '⚡',
      category: 'platform',
      data: [
        { label: 'SLA Met', value: 99.98, color: '#6B8E7B' },
        { label: 'SLA Breach', value: 0.02, color: '#C27D66' },
      ],
      valueSuffix: '%',
    },
    {
      id: 'domains-16',
      title: '16 Enterprise Domains',
      subtitle: 'All 16/16 domains implemented & validated',
      icon: '🏛',
      category: 'platform',
      data: [
        { label: 'IAM', value: 1, color: '#5E6AD2' },
        { label: 'CRM', value: 1, color: '#6B8E7B' },
        { label: 'HR', value: 1, color: '#D99E4B' },
        { label: 'Projects', value: 1, color: '#C27D66' },
        { label: 'Finance', value: 1, color: '#8B6BBF' },
        { label: 'Supply Chain', value: 1, color: '#4A9EBF' },
        { label: 'Support', value: 1, color: '#BF7A4A' },
        { label: 'Communication', value: 1, color: '#7BBF4A' },
        { label: 'DMS', value: 1, color: '#BF4A6B' },
        { label: 'Workflow DAG', value: 1, color: '#4ABF9E' },
        { label: 'Events', value: 1, color: '#9E4ABF' },
        { label: 'BI & Analytics', value: 1, color: '#BFB34A' },
        { label: 'AI Platform', value: 1, color: '#4A6BBF' },
        { label: 'Integrations', value: 1, color: '#BF4A4A' },
        { label: 'IoT Fleet', value: 1, color: '#4ABF6B' },
        { label: 'Observability', value: 1, color: '#6B4ABF' },
      ],
    },
    {
      id: 'module-metrics',
      title: 'Module Active Items Comparison',
      subtitle: 'Each module: 1,240 active items — 98.4% efficiency',
      icon: '📋',
      category: 'platform',
      data: [
        { label: 'CRM', value: 1240, color: '#5E6AD2' },
        { label: 'HR', value: 1240, color: '#6B8E7B' },
        { label: 'Finance', value: 1240, color: '#D99E4B' },
        { label: 'Inventory', value: 1240, color: '#C27D66' },
        { label: 'Support', value: 1240, color: '#8B6BBF' },
        { label: 'Workflow', value: 1240, color: '#4A9EBF' },
        { label: 'AI', value: 1240, color: '#BF7A4A' },
        { label: 'IoT', value: 1240, color: '#7BBF4A' },
        { label: 'Projects', value: 1240, color: '#BF4A6B' },
        { label: 'Security', value: 1240, color: '#4ABF9E' },
        { label: 'Documents', value: 1240, color: '#9E4ABF' },
      ],
      valueSuffix: ' items',
    },
  ],

  /* ── Code Quality (from PROJECT_PROGRESS.md) ── */
  code: [
    {
      id: 'loc-breakdown',
      title: 'Lines of Code Breakdown',
      subtitle: 'Total: 12,60,510 raw LOC across 76,714 files',
      icon: '🔧',
      category: 'code',
      data: [
        { label: 'Production & Test LOC', value: 1063267, color: '#6B8E7B' },
        { label: 'Blank Lines', value: 196137, color: '#E2DFD8' },
        { label: 'Comments & Docstrings', value: 1106, color: '#D99E4B' },
      ],
    },
    {
      id: 'code-quality',
      title: 'Code Quality Gates',
      subtitle: 'Zero duplication — 100% test pass rate',
      icon: '✅',
      category: 'code',
      data: [
        { label: 'Test Pass Rate', value: 100, color: '#6B8E7B' },
        { label: 'Duplicate Violations', value: 0.001, color: '#C27D66' },
      ],
      valueSuffix: '%',
    },
    {
      id: 'git-activity',
      title: 'Git & Collaboration',
      subtitle: '107 commits, 105 PRs, 7 contributors',
      icon: '🔀',
      category: 'code',
      data: [
        { label: 'Commits', value: 107, color: '#5E6AD2' },
        { label: 'Pull Requests', value: 105, color: '#6B8E7B' },
        { label: 'Contributors', value: 7, color: '#D99E4B' },
      ],
    },
    {
      id: 'contributors',
      title: 'Team Contribution Roles',
      subtitle: '7 simulated collaborative contributors',
      icon: '👥',
      category: 'code',
      data: [
        { label: 'Dhanunjay (Architect)', value: 1, color: '#5E6AD2' },
        { label: 'Elena (Backend)', value: 1, color: '#6B8E7B' },
        { label: 'Marcus (Distributed)', value: 1, color: '#D99E4B' },
        { label: 'Aria (Frontend)', value: 1, color: '#C27D66' },
        { label: 'Kenji (AI/ML)', value: 1, color: '#8B6BBF' },
        { label: 'Sarah (DevOps)', value: 1, color: '#4A9EBF' },
        { label: 'David (QA)', value: 1, color: '#BF7A4A' },
      ],
    },
  ],
};

/* ──────────────────────────────────────────────
   HELPER — format large numbers
   ────────────────────────────────────────────── */

function formatValue(val: number, prefix = '', suffix = ''): string {
  if (val >= 1_000_000) return `${prefix}${(val / 1_000_000).toFixed(1)}M${suffix}`;
  if (val >= 1_000) return `${prefix}${(val / 1_000).toFixed(1)}K${suffix}`;
  return `${prefix}${val % 1 ? val.toFixed(1) : val}${suffix}`;
}

/* ──────────────────────────────────────────────
   COMPONENT — single donut pie chart
   ────────────────────────────────────────────── */

function DonutChart({ data, size = 180 }: { data: SliceData[]; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const total = data.reduce((s, d) => s + d.value, 0);
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 12;
    let startAngle = -Math.PI / 2;

    // Draw slices
    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      // White separator
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(endAngle), cy + radius * Math.sin(endAngle));
      ctx.strokeStyle = '#FBFBF9';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      startAngle = endAngle;
    });

    // Inner donut hole
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.55, 0, 2 * Math.PI);
    ctx.fillStyle = '#FBFBF9';
    ctx.fill();

    // Center text
    ctx.fillStyle = '#1E2022';
    ctx.font = 'bold 16px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let label: string;
    if (total >= 1_000_000) label = `${(total / 1_000_000).toFixed(1)}M`;
    else if (total >= 1_000) label = `${(total / 1_000).toFixed(1)}K`;
    else label = `${total % 1 ? total.toFixed(1) : total}`;

    ctx.fillText(label, cx, cy - 6);
    ctx.font = '10px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = 'rgba(30,32,34,0.55)';
    ctx.fillText('TOTAL', cx, cy + 10);
  }, [data, size]);

  useEffect(() => {
    draw();
  }, [draw]);

  return <canvas ref={canvasRef} />;
}

/* ──────────────────────────────────────────────
   COMPONENT — chart card with donut + legend
   ────────────────────────────────────────────── */

function ChartCard({ chart, delay }: { chart: ChartConfig; delay: number }) {
  const total = chart.data.reduce((s, d) => s + d.value, 0);

  return (
    <div
      className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-6 shadow-sm opacity-0"
      style={{
        animation: `fadeInUp 0.5s ease-out ${delay}s forwards`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">{chart.icon}</span>
        <h3 className="font-bold text-sm text-[#1E2022]">{chart.title}</h3>
      </div>
      <p className="text-[10px] text-[#1E2022]/50 mb-4">{chart.subtitle}</p>

      {/* Chart + Legend */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <DonutChart data={chart.data} size={180} />
        </div>
        <div className="flex-1 min-w-0 space-y-0.5 max-h-[200px] overflow-y-auto">
          {chart.data.map((d) => {
            const pct = ((d.value / total) * 100).toFixed(1);
            const display = formatValue(d.value, chart.valuePrefix || '', chart.valueSuffix || '');
            return (
              <div key={d.label} className="flex items-center gap-2 py-1">
                <div
                  className="flex-shrink-0 w-3 h-3 rounded-sm"
                  style={{ background: d.color }}
                />
                <span className="text-xs text-[#1E2022]/80 flex-1 truncate">{d.label}</span>
                <span className="text-xs font-bold text-[#1E2022] tabular-nums">{display}</span>
                <span className="text-[10px] text-[#1E2022]/50 tabular-nums w-10 text-right">
                  {pct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   TAB DEFINITIONS
   ────────────────────────────────────────────── */

const tabs = [
  { key: 'all', label: '📊 All Charts' },
  { key: 'crm', label: '🎯 CRM' },
  { key: 'projects', label: '📁 Projects' },
  { key: 'workforce', label: '👥 Workforce' },
  { key: 'platform', label: '⚡ Platform' },
  { key: 'code', label: '🔧 Code Quality' },
];

/* ──────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────── */

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const charts: ChartConfig[] =
    activeTab === 'all'
      ? Object.values(chartsData).flat()
      : chartsData[activeTab] || [];

  // Summary KPIs for the top cards
  const summaryKPIs = [
    { label: 'Total Charts', value: Object.values(chartsData).flat().length.toString(), change: '13 analytics', positive: true },
    { label: 'Data Points Analyzed', value: '96+', change: 'Real-time', positive: true },
    { label: 'Enterprise Domains', value: '16/16', change: '100% coverage', positive: true },
    { label: 'Production LOC', value: '10.6L+', change: '76,714 files', positive: true },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Keyframe injection */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1E2022] flex items-center gap-2">
            <span>📊</span> Analytics Intelligence
          </h2>
          <p className="text-xs text-[#1E2022]/60 mt-1">
            Pie chart data analysis across all 16 enterprise domains.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#EFECE6] text-[#1E2022] hover:bg-[#E2DFD8] text-xs font-semibold rounded-xl transition">
            Export BI Report
          </button>
          <button className="px-4 py-2 bg-[#5E6AD2] text-white hover:bg-[#4E5AC2] text-xs font-semibold rounded-xl shadow-sm transition">
            + Custom Chart
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {summaryKPIs.map((kpi) => (
          <div key={kpi.label} className="bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-5 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#1E2022]/60">
              {kpi.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#1E2022]">{kpi.value}</span>
              <span className={`text-xs font-bold ${kpi.positive ? 'text-[#6B8E7B]' : 'text-[#C27D66]'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === tab.key
                ? 'bg-[#5E6AD2] text-white'
                : 'bg-[#EFECE6] text-[#1E2022] hover:bg-[#E2DFD8]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {charts.map((chart, i) => (
          <ChartCard key={chart.id} chart={chart} delay={i * 0.08} />
        ))}
      </div>

      {/* Footer insight */}
      <div className="bg-[#F7F6F3] border border-[#E2DFD8] rounded-2xl p-5 text-center">
        <p className="text-xs text-[#1E2022]/60">
          📡 Data sourced from NEXORA Core Engine across all operational modules.
          Displaying <span className="font-bold text-[#5E6AD2]">{charts.length}</span> charts
          {activeTab !== 'all' && (
            <> — filtered by <span className="font-bold text-[#5E6AD2]">{activeTab.toUpperCase()}</span></>
          )}.
        </p>
      </div>
    </div>
  );
}

