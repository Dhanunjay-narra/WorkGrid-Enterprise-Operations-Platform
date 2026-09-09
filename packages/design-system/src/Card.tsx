
import React from 'react';
export const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={`bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-6 shadow-sm ${className}`}>
    {title && <h3 className="text-base font-semibold text-[#1E2022] mb-4">{title}</h3>}
    {children}
  </div>
);
