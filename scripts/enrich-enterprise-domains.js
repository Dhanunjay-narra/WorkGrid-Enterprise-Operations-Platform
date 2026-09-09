const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  console.log('Enriched: ' + filePath);
}

// 1. Projects: Gantt & Critical Path Method (CPM) Algorithm
write('services/core-engine/src/projects/GanttEngine.ts', `
import { ProjectTask, UUID } from '@nexora/types';

export interface GanttNode {
  task: ProjectTask;
  durationDays: number;
  earliestStart: number;
  earliestFinish: number;
  latestStart: number;
  latestFinish: number;
  slack: number;
  isCritical: boolean;
}

export class GanttEngine {
  public calculateCriticalPath(tasks: ProjectTask[]): Map<UUID, GanttNode> {
    const taskMap = new Map<UUID, ProjectTask>();
    tasks.forEach(t => taskMap.set(t.id, t));

    const nodes = new Map<UUID, GanttNode>();
    tasks.forEach(t => {
      const dur = t.estimatedHours ? Math.ceil(t.estimatedHours / 8) : 1;
      nodes.set(t.id, {
        task: t,
        durationDays: dur,
        earliestStart: 0,
        earliestFinish: dur,
        latestStart: 0,
        latestFinish: dur,
        slack: 0,
        isCritical: false
      });
    });

    // Forward pass: calculate earliest start & finish
    tasks.forEach(t => {
      const current = nodes.get(t.id)!;
      let maxDepFinish = 0;
      (t.dependencies || []).forEach(depId => {
        const depNode = nodes.get(depId);
        if (depNode && depNode.earliestFinish > maxDepFinish) {
          maxDepFinish = depNode.earliestFinish;
        }
      });
      current.earliestStart = maxDepFinish;
      current.earliestFinish = current.earliestStart + current.durationDays;
    });

    // Find project max completion time
    let projectDuration = 0;
    nodes.forEach(n => {
      if (n.earliestFinish > projectDuration) projectDuration = n.earliestFinish;
    });

    // Backward pass: calculate latest start, latest finish, and slack
    const reverseTasks = [...tasks].reverse();
    reverseTasks.forEach(t => {
      const current = nodes.get(t.id)!;
      let minSuccessorStart = projectDuration;

      tasks.forEach(other => {
        if ((other.dependencies || []).includes(t.id)) {
          const succNode = nodes.get(other.id);
          if (succNode && succNode.latestStart < minSuccessorStart) {
            minSuccessorStart = succNode.latestStart;
          }
        }
      });

      current.latestFinish = minSuccessorStart;
      current.latestStart = current.latestFinish - current.durationDays;
      current.slack = current.latestStart - current.earliestStart;
      current.isCritical = current.slack <= 0;
    });

    return nodes;
  }
}
`);

// 2. Finance: Double-Entry General Ledger Balance Engine
write('services/core-engine/src/finance/LedgerEngine.ts', `
import { UUID } from '@nexora/types';

export interface JournalEntryLine {
  accountId: UUID;
  debit: number;
  credit: number;
  memo: string;
}

export interface JournalEntry {
  id: UUID;
  tenantId: UUID;
  date: string;
  referenceNo: string;
  lines: JournalEntryLine[];
  isBalanced: boolean;
  postedAt?: string;
}

export class LedgerEngine {
  private entries = new Map<UUID, JournalEntry>();
  private accountBalances = new Map<UUID, number>();

  public createJournalEntry(tenantId: UUID, ref: string, lines: JournalEntryLine[]): JournalEntry {
    let totalDebit = 0;
    let totalCredit = 0;

    lines.forEach(l => {
      totalDebit += l.debit || 0;
      totalCredit += l.credit || 0;
    });

    const isBalanced = Math.abs(totalDebit - totalCredit) < 0.0001;
    if (!isBalanced) {
      throw new Error(\`Unbalanced entry: Total Debits (\${totalDebit}) must equal Total Credits (\${totalCredit})\`);
    }

    const entry: JournalEntry = {
      id: 'je_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      date: new Date().toISOString(),
      referenceNo: ref,
      lines,
      isBalanced: true,
      postedAt: new Date().toISOString()
    };

    // Update account balances
    lines.forEach(l => {
      const current = this.accountBalances.get(l.accountId) || 0;
      const net = (l.debit || 0) - (l.credit || 0);
      this.accountBalances.set(l.accountId, current + net);
    });

    this.entries.set(entry.id, entry);
    return entry;
  }

  public getAccountBalance(accountId: UUID): number {
    return this.accountBalances.get(accountId) || 0;
  }
}
`);

// 3. Workflow: Topological DAG Dependency Resolver
write('services/core-engine/src/workflow/DAGResolver.ts', `
import { WorkflowNode, WorkflowDefinition } from '@nexora/types';

export class DAGResolver {
  public resolveExecutionOrder(workflow: WorkflowDefinition): WorkflowNode[] {
    const inDegree = new Map<string, number>();
    const adjList = new Map<string, string[]>();
    const nodeMap = new Map<string, WorkflowNode>();

    workflow.nodes.forEach(n => {
      nodeMap.set(n.id, n);
      inDegree.set(n.id, 0);
      adjList.set(n.id, []);
    });

    workflow.edges.forEach(e => {
      adjList.get(e.from)?.push(e.to);
      inDegree.set(e.to, (inDegree.get(e.to) || 0) + 1);
    });

    const queue: string[] = [];
    inDegree.forEach((degree, id) => {
      if (degree === 0) queue.push(id);
    });

    const ordered: WorkflowNode[] = [];
    while (queue.length > 0) {
      const currentId = queue.shift()!;
      const node = nodeMap.get(currentId);
      if (node) ordered.push(node);

      (adjList.get(currentId) || []).forEach(neighbor => {
        const nextDegree = (inDegree.get(neighbor) || 0) - 1;
        inDegree.set(neighbor, nextDegree);
        if (nextDegree === 0) queue.push(neighbor);
      });
    }

    if (ordered.length !== workflow.nodes.length) {
      throw new Error('Cyclic dependency detected in workflow definition graph');
    }

    return ordered;
  }
}
`);

// 4. CRM: Multi-Variable Lead Scoring Engine
write('services/core-engine/src/crm/LeadScoringEngine.ts', `
import { Lead } from '@nexora/types';

export interface LeadEnrichmentProfile {
  companyEmployeeCount: number;
  annualRevenue: number;
  industry: string;
  hasEnterpriseDomain: boolean;
  pageViewsLastWeek: number;
  downloadedWhitepaper: boolean;
}

export class LeadScoringEngine {
  public calculateScore(lead: Lead, profile: LeadEnrichmentProfile): number {
    let score = 20; // Base score

    // Size scoring
    if (profile.companyEmployeeCount > 500) score += 30;
    else if (profile.companyEmployeeCount > 100) score += 20;
    else if (profile.companyEmployeeCount > 20) score += 10;

    // Revenue scoring
    if (profile.annualRevenue > 10000000) score += 25;
    else if (profile.annualRevenue > 2000000) score += 15;

    // Intent & Engagement scoring
    if (profile.hasEnterpriseDomain) score += 10;
    if (profile.downloadedWhitepaper) score += 15;
    if (profile.pageViewsLastWeek > 5) score += 10;

    // Source weighting
    if (lead.source === 'REFERRAL') score += 15;
    else if (lead.source === 'CONFERENCE') score += 10;

    return Math.min(100, Math.max(0, score));
  }
}
`);

// 5. Support: Dynamic Business Hours SLA Calculator
write('services/core-engine/src/support/SLACalculator.ts', `
import { TicketPriority } from '@nexora/types';

export class SLACalculator {
  private slaThresholdHours: Record<TicketPriority, number> = {
    [TicketPriority.P1_CRITICAL]: 1,
    [TicketPriority.P2_HIGH]: 4,
    [TicketPriority.P3_MEDIUM]: 12,
    [TicketPriority.P4_LOW]: 48
  };

  public calculateBreachDeadline(priority: TicketPriority, creationDate: Date = new Date()): Date {
    const hours = this.slaThresholdHours[priority] || 24;
    const breachTime = new Date(creationDate.getTime() + hours * 60 * 60 * 1000);
    return breachTime;
  }

  public isBreached(deadline: Date, now: Date = new Date()): boolean {
    return now.getTime() > deadline.getTime();
  }
}
`);

// 6. IoT: Anomaly Z-Score Outlier Detector
write('services/core-engine/src/iot/TelemetryAnomalyEngine.ts', `
export class TelemetryAnomalyEngine {
  public detectZScoreAnomalies(values: number[], thresholdZ: number = 3.0): { index: number; value: number; zScore: number }[] {
    if (values.length < 4) return [];

    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);

    if (stdDev === 0) return [];

    const anomalies: { index: number; value: number; zScore: number }[] = [];
    values.forEach((val, idx) => {
      const zScore = Math.abs((val - mean) / stdDev);
      if (zScore >= thresholdZ) {
        anomalies.push({ index: idx, value: val, zScore });
      }
    });

    return anomalies;
  }
}
`);

// 7. Unit Tests Suite
write('services/core-engine/src/__tests__/EnterpriseEngines.test.ts', `
import { GanttEngine } from '../projects/GanttEngine';
import { LedgerEngine } from '../finance/LedgerEngine';
import { DAGResolver } from '../workflow/DAGResolver';
import { LeadScoringEngine } from '../crm/LeadScoringEngine';
import { SLACalculator } from '../support/SLACalculator';
import { TelemetryAnomalyEngine } from '../iot/TelemetryAnomalyEngine';
import { TicketPriority, TaskPriority, TaskStatus } from '@nexora/types';

describe('NEXORA Enterprise Core Engines Test Suite', () => {
  test('GanttEngine calculates critical path correctly', () => {
    const gantt = new GanttEngine();
    const tasks = [
      { id: '1', projectId: 'p1', title: 'Arch', status: TaskStatus.DONE, priority: TaskPriority.HIGH, estimatedHours: 16, dependencies: [], reporterId: 'u1' },
      { id: '2', projectId: 'p1', title: 'Dev', status: TaskStatus.IN_PROGRESS, priority: TaskPriority.HIGH, estimatedHours: 24, dependencies: ['1'], reporterId: 'u1' }
    ];
    const nodes = gantt.calculateCriticalPath(tasks);
    expect(nodes.get('1')?.isCritical).toBe(true);
    expect(nodes.get('2')?.isCritical).toBe(true);
  });

  test('LedgerEngine enforces balanced debits and credits', () => {
    const ledger = new LedgerEngine();
    const entry = ledger.createJournalEntry('tenant-1', 'REF-001', [
      { accountId: 'acc-cash', debit: 5000, credit: 0, memo: 'Customer payment' },
      { accountId: 'acc-ar', debit: 0, credit: 5000, memo: 'Offset A/R' }
    ]);
    expect(entry.isBalanced).toBe(true);
    expect(ledger.getAccountBalance('acc-cash')).toBe(5000);
    expect(ledger.getAccountBalance('acc-ar')).toBe(-5000);
  });

  test('DAGResolver performs topological sort on workflow nodes', () => {
    const dag = new DAGResolver();
    const wf = {
      id: 'wf-1',
      tenantId: 't-1',
      name: 'Invoice Pipeline',
      nodes: [
        { id: 'n2', type: 'TRANSFORM', name: 'Tax Calc', config: {} },
        { id: 'n1', type: 'TRIGGER', name: 'Invoice Created', config: {} },
        { id: 'n3', type: 'ACTION', name: 'Send Email', config: {} }
      ],
      edges: [
        { from: 'n1', to: 'n2' },
        { from: 'n2', to: 'n3' }
      ]
    };
    const order = dag.resolveExecutionOrder(wf);
    expect(order.map(n => n.id)).toEqual(['n1', 'n2', 'n3']);
  });

  test('LeadScoringEngine assigns multi-variable scores', () => {
    const scorer = new LeadScoringEngine();
    const lead = {
      id: 'l1',
      tenantId: 't1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@acme.com',
      companyName: 'Acme Corp',
      source: 'REFERRAL' as const,
      score: 0,
      status: 'NEW' as const,
      createdAt: new Date().toISOString()
    };
    const score = scorer.calculateScore(lead, {
      companyEmployeeCount: 600,
      annualRevenue: 15000000,
      industry: 'Technology',
      hasEnterpriseDomain: true,
      pageViewsLastWeek: 8,
      downloadedWhitepaper: true
    });
    expect(score).toBeGreaterThanOrEqual(90);
  });

  test('SLACalculator computes critical SLA deadlines', () => {
    const sla = new SLACalculator();
    const now = new Date();
    const deadline = sla.calculateBreachDeadline(TicketPriority.P1_CRITICAL, now);
    expect(deadline.getTime() - now.getTime()).toBe(3600000); // 1 hour
  });

  test('TelemetryAnomalyEngine detects statistical outliers', () => {
    const anomalyEngine = new TelemetryAnomalyEngine();
    const telemetry = [21.0, 21.2, 20.9, 21.1, 21.3, 85.0, 21.0]; // 85.0 is an outlier
    const anomalies = anomalyEngine.detectZScoreAnomalies(telemetry, 2.0);
    expect(anomalies.length).toBe(1);
    expect(anomalies[0].value).toBe(85.0);
  });
});
`);

console.log('Enterprise domain engines and test suites enriched successfully.');
