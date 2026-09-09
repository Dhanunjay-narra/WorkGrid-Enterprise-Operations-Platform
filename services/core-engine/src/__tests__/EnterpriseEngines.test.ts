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
