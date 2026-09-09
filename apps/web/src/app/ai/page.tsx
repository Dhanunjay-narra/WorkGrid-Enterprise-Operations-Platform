'use client';
import React, { useState } from 'react';
import { Card, MetricCard, Button, Badge } from '@nexora/design-system';

export default function AIPage() {
  const [activeView, setActiveView] = useState('all');

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1E2022] flex items-center gap-2">
            <span>🤖</span> AI 9-Agent Operational Mesh
          </h2>
          <p className="text-xs text-[#1E2022]/60 mt-1">Autonomous management and operational insights for ai.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => alert('Exporting data...')}>Export View</Button>
          <Button variant="primary" onClick={() => alert('Action triggered!')}>+ New AI Entry</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard label="Active Items" value="1,240" change="12%" isPositive={true} />
        <MetricCard label="Efficiency Index" value="98.4%" change="2.1%" isPositive={true} />
        <MetricCard label="Pending Review" value="6" change="3" isPositive={false} />
      </div>

      <Card title="AI 9-Agent Operational Mesh Operational Registry">
        <div className="flex items-center justify-between pb-4 border-b border-[#E2DFD8]">
          <div className="flex gap-2">
            {['all', 'active', 'archived'].map(v => (
              <button
                key={v}
                onClick={() => setActiveView(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize ${
                  activeView === v ? 'bg-[#5E6AD2] text-white' : 'bg-[#EFECE6] text-[#1E2022]'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <Badge variant="sage">Real-Time Sync Active</Badge>
        </div>
        <div className="py-8 text-center text-xs text-[#1E2022]/60">
          Connected to NEXORA Core Engine API Gateway. Real-time WebSocket streaming active.
        </div>
      </Card>
    </div>
  );
}
