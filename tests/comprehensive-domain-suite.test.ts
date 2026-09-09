import { SessionManager } from '../services/core-engine/src/identity/SessionManager';
import { DeviceFingerprintEngine } from '../services/core-engine/src/identity/DeviceFingerprintEngine';
import { CustomerHealthScoreEngine } from '../services/core-engine/src/crm/CustomerHealthScoreEngine';
import { PayrollCalculator } from '../services/core-engine/src/hr/PayrollCalculator';
import { LeaveEntitlementEngine } from '../services/core-engine/src/hr/LeaveEntitlementEngine';
import { SprintVelocityEngine } from '../services/core-engine/src/projects/SprintVelocityEngine';
import { TaxCalculationEngine } from '../services/core-engine/src/finance/TaxCalculationEngine';
import { CashFlowForecastEngine } from '../services/core-engine/src/finance/CashFlowForecastEngine';
import { ReorderPointEngine } from '../services/core-engine/src/inventory/ReorderPointEngine';

describe('NEXORA Exhaustive Enterprise Domain Suite', () => {
  test('SessionManager creates and validates sessions', () => {
    const sm = new SessionManager();
    const { session, rawToken } = sm.createSession({
      userId: 'u-1',
      tenantId: 't-1',
      ipAddress: '127.0.0.1',
      userAgent: 'Mozilla/5.0',
      deviceFingerprint: 'fp-1'
    });
    expect(sm.validateSession(session.id, rawToken)).toBe(true);
    expect(sm.validateSession(session.id, 'wrong-token')).toBe(false);
  });

  test('CustomerHealthScoreEngine flags at-risk customers', () => {
    const health = new CustomerHealthScoreEngine();
    const res = health.calculateHealthScore({
      loginFrequencyPerWeek: 1,
      openSupportTicketsCount: 4,
      criticalBugsReported: 2,
      featureAdoptionRate: 0.2,
      invoicePaymentDelayDays: 35
    });
    expect(res.status).toBe('CRITICAL');
  });

  test('PayrollCalculator computes accurate gross and net pay', () => {
    const pr = new PayrollCalculator();
    const res = pr.computeMonthlyPayroll({
      baseSalary: 10000,
      allowances: 1500,
      bonus: 500,
      taxRatePercent: 20,
      retirementContributionPercent: 5,
      healthInsuranceDeduction: 300
    });
    expect(res.grossPay).toBe(12000);
    expect(res.taxDeduction).toBe(2400);
    expect(res.retirementDeduction).toBe(500);
    expect(res.netPay).toBe(8800);
  });

  test('SprintVelocityEngine forecasts sprint timelines', () => {
    const vel = new SprintVelocityEngine();
    const res = vel.calculateAverageVelocity([
      { sprintId: 's1', committedStoryPoints: 40, completedStoryPoints: 38, spilloverStoryPoints: 2 },
      { sprintId: 's2', committedStoryPoints: 45, completedStoryPoints: 42, spilloverStoryPoints: 3 }
    ]);
    expect(res.averageVelocity).toBe(40);
    expect(vel.forecastSprintsRequired(120, res.averageVelocity)).toBe(3);
  });

  test('TaxCalculationEngine calculates multi-jurisdiction VAT/GST', () => {
    const tax = new TaxCalculationEngine();
    const ukRes = tax.computeTax(1000, 'GB');
    expect(ukRes.rate).toBe(20);
    expect(ukRes.taxAmount).toBe(200);

    const nyRes = tax.computeTax(1000, 'US', 'NY');
    expect(nyRes.rate).toBe(8.875);
    expect(nyRes.taxAmount).toBe(88.75);
  });

  test('ReorderPointEngine computes safety stock and trigger thresholds', () => {
    const rpo = new ReorderPointEngine();
    const point = rpo.calculateReorderPoint({
      averageDailyDemand: 25,
      leadTimeDays: 10,
      safetyStock: 50
    });
    expect(point).toBe(300);
    expect(rpo.shouldTriggerPurchaseOrder(280, point)).toBe(true);
    expect(rpo.shouldTriggerPurchaseOrder(350, point)).toBe(false);
  });
});
