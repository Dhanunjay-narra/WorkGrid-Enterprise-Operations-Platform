
import React from 'react';
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'sage' | 'terracotta' | 'amber' | 'indigo' | 'neutral' }> = ({ children, variant = 'neutral' }) => {
  const map = {
    neutral: 'bg-[#EFECE6] text-[#1E2022]',
    sage: 'bg-[#6B8E7B]/20 text-[#3F5A4D]',
    terracotta: 'bg-[#C27D66]/20 text-[#8F4E3B]',
    amber: 'bg-[#D99E4B]/20 text-[#875F24]',
    indigo: 'bg-[#5E6AD2]/20 text-[#3D479B]'
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${map[variant]}`}>{children}</span>;
};
