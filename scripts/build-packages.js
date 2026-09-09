const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Created: ' + filePath);
}

// 1. @nexora/types
write('packages/types/package.json', JSON.stringify({
  name: '@nexora/types',
  version: '2.4.0',
  main: './src/index.ts',
  types: './src/index.ts',
  private: true
}, null, 2));

write('packages/types/src/index.ts', `
export type UUID = string;
export type ISODateString = string;

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  TENANT_ADMIN = 'TENANT_ADMIN',
  FINANCE_OFFICER = 'FINANCE_OFFICER',
  HR_MANAGER = 'HR_MANAGER',
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  SUPPORT_AGENT = 'SUPPORT_AGENT',
  DEVELOPER = 'DEVELOPER',
  END_USER = 'END_USER',
}

export interface Tenant {
  id: UUID;
  name: string;
  slug: string;
  plan: string;
  status: 'ACTIVE' | 'SUSPENDED';
  createdAt: ISODateString;
}

export interface User {
  id: UUID;
  tenantId: UUID;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: ISODateString;
}

export interface Deal {
  id: UUID;
  tenantId: UUID;
  title: string;
  amount: number;
  stage: 'PROSPECT' | 'QUALIFICATION' | 'PROPOSAL' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';
  probability: number;
}

export interface Employee {
  id: UUID;
  tenantId: UUID;
  userId: UUID;
  employeeCode: string;
  department: string;
  designation: string;
}

export interface ProjectTask {
  id: UUID;
  projectId: UUID;
  title: string;
  status: 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface Invoice {
  id: UUID;
  tenantId: UUID;
  invoiceNumber: string;
  totalAmount: number;
  currency: string;
  status: 'DRAFT' | 'ISSUED' | 'PAID' | 'OVERDUE';
}

export interface SKUItem {
  id: UUID;
  tenantId: UUID;
  sku: string;
  name: string;
  costPrice: number;
  sellingPrice: number;
}

export interface SupportTicket {
  id: UUID;
  tenantId: UUID;
  ticketNumber: string;
  subject: string;
  priority: 'P1_CRITICAL' | 'P2_HIGH' | 'P3_MEDIUM' | 'P4_LOW';
  status: 'NEW' | 'ASSIGNED' | 'RESOLVED' | 'CLOSED';
}

export interface WorkflowNode {
  id: string;
  type: string;
  name: string;
  config: Record<string, unknown>;
}

export interface WorkflowDefinition {
  id: UUID;
  tenantId: UUID;
  name: string;
  nodes: WorkflowNode[];
  edges: { from: string; to: string }[];
}

export interface DomainEvent<T = unknown> {
  id: UUID;
  tenantId: UUID;
  name: string;
  payload: T;
  occurredAt: ISODateString;
}

export interface IoTDevice {
  id: UUID;
  tenantId: UUID;
  deviceIdentifier: string;
  name: string;
  status: 'ONLINE' | 'OFFLINE';
}
`);

// 2. @nexora/config
write('packages/config/package.json', JSON.stringify({
  name: '@nexora/config',
  version: '2.4.0',
  main: './src/index.ts',
  types: './src/index.ts',
  private: true
}, null, 2));

write('packages/config/src/index.ts', `
export const PASTEL_PALETTE = {
  canvas: '#FBFBF9',
  sand: '#EFECE6',
  stone: '#E2DFD8',
  warmCharcoal: '#1E2022',
  mutedSage: '#6B8E7B',
  dustyTerracotta: '#C27D66',
  softIndigo: '#5E6AD2',
  warmAmber: '#D99E4B',
  roseQuartz: '#D4A5A5',
  softCeladon: '#A2B9AF'
} as const;
`);

// 3. @nexora/design-system
write('packages/design-system/package.json', JSON.stringify({
  name: '@nexora/design-system',
  version: '2.4.0',
  main: './src/index.ts',
  types: './src/index.ts',
  private: true
}, null, 2));

write('packages/design-system/src/index.ts', `
export * from './Button';
export * from './Card';
export * from './Badge';
export * from './MetricCard';
`);

write('packages/design-system/src/Button.tsx', `
import React from 'react';
export const Button: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' | 'sage'; onClick?: () => void }> = ({
  children,
  variant = 'primary',
  onClick
}) => {
  const styles = {
    primary: 'bg-[#5E6AD2] text-white hover:bg-[#4E5AC2] px-4 py-2 rounded-xl text-sm font-medium transition',
    secondary: 'bg-[#EFECE6] text-[#1E2022] hover:bg-[#E2DFD8] px-4 py-2 rounded-xl text-sm font-medium transition',
    sage: 'bg-[#6B8E7B] text-white hover:bg-[#5A7C6A] px-4 py-2 rounded-xl text-sm font-medium transition'
  };
  return <button className={styles[variant]} onClick={onClick}>{children}</button>;
};
`);

write('packages/design-system/src/Card.tsx', `
import React from 'react';
export const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={\`bg-[#FBFBF9] border border-[#E2DFD8] rounded-2xl p-6 shadow-sm \${className}\`}>
    {title && <h3 className="text-base font-semibold text-[#1E2022] mb-4">{title}</h3>}
    {children}
  </div>
);
`);

write('packages/design-system/src/Badge.tsx', `
import React from 'react';
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'sage' | 'terracotta' | 'amber' | 'indigo' | 'neutral' }> = ({ children, variant = 'neutral' }) => {
  const map = {
    neutral: 'bg-[#EFECE6] text-[#1E2022]',
    sage: 'bg-[#6B8E7B]/20 text-[#3F5A4D]',
    terracotta: 'bg-[#C27D66]/20 text-[#8F4E3B]',
    amber: 'bg-[#D99E4B]/20 text-[#875F24]',
    indigo: 'bg-[#5E6AD2]/20 text-[#3D479B]'
  };
  return <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${map[variant]}\`}>{children}</span>;
};
`);

write('packages/design-system/src/MetricCard.tsx', `
import React from 'react';
import { Card } from './Card';
export const MetricCard: React.FC<{ label: string; value: string | number; change?: string; isPositive?: boolean }> = ({ label, value, change, isPositive }) => (
  <Card>
    <p className="text-xs uppercase font-semibold text-[#1E2022]/60">{label}</p>
    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-2xl font-bold text-[#1E2022]">{value}</span>
      {change && <span className={\`text-xs font-semibold \${isPositive ? 'text-[#6B8E7B]' : 'text-[#C27D66]'}\`}>{isPositive ? '↑' : '↓'} {change}</span>}
    </div>
  </Card>
);
`);

// 4. @nexora/database
write('packages/database/package.json', JSON.stringify({
  name: '@nexora/database',
  version: '2.4.0',
  main: './src/index.ts',
  private: true
}, null, 2));

write('packages/database/prisma/schema.prisma', `
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Tenant {
  id        String   @id @default(uuid())
  name      String
  slug      String   @unique
  plan      String   @default("ENTERPRISE")
  status    String   @default("ACTIVE")
  createdAt DateTime @default(now())
}
`);

write('packages/database/src/index.ts', `
export class DatabaseManager {
  private static instance: DatabaseManager;
  public static getInstance() {
    if (!DatabaseManager.instance) DatabaseManager.instance = new DatabaseManager();
    return DatabaseManager.instance;
  }
  public async query(sql: string) { return []; }
}
export const db = DatabaseManager.getInstance();
`);

// 5. @nexora/sdk
write('packages/sdk/package.json', JSON.stringify({
  name: '@nexora/sdk',
  version: '2.4.0',
  main: './src/index.ts',
  private: true
}, null, 2));

write('packages/sdk/src/index.ts', `
export class NexoraSDK {
  constructor(private config: { apiKey: string; endpoint?: string }) {}
  public async getHealth() { return { status: 'HEALTHY' }; }
  public async runAgent(type: string, prompt: string) { return { status: 'PROCESSED', prompt }; }
}
`);

write('packages/sdk/python/nexora/client.py', `
class NexoraSDK:
    def __init__(self, api_key: str):
        self.api_key = api_key
    def get_health(self):
        return {"status": "HEALTHY"}
`);

// 6. @nexora/cli
write('packages/cli/package.json', JSON.stringify({
  name: '@nexora/cli',
  version: '2.4.0',
  bin: { nexora: './src/index.js' },
  private: true
}, null, 2));

write('packages/cli/src/index.js', `#!/usr/bin/env node
console.log('⚡ NEXORA Enterprise Operations CLI v2.4.0');
`);

console.log('All shared packages built successfully.');
