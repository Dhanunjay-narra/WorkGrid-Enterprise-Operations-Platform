
import React from 'react';
import { Card } from './Card';
export const MetricCard: React.FC<{ label: string; value: string | number; change?: string; isPositive?: boolean }> = ({ label, value, change, isPositive }) => (
  <Card>
    <p className="text-xs uppercase font-semibold text-[#1E2022]/60">{label}</p>
    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-2xl font-bold text-[#1E2022]">{value}</span>
      {change && <span className={`text-xs font-semibold ${isPositive ? 'text-[#6B8E7B]' : 'text-[#C27D66]'}`}>{isPositive ? '↑' : '↓'} {change}</span>}
    </div>
  </Card>
);
