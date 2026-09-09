
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
