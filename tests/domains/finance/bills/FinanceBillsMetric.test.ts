import { FinanceBillsMetricService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsMetricService";
import { FinanceBillsMetricValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsMetric";
import { FinanceBillsMetricStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsMetricStateMachine";

describe("FinanceBillsMetric Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsMetricService();
  const sm = new FinanceBillsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsMetric Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
