import { FinanceBillsTaskService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsTaskService";
import { FinanceBillsTaskValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsTask";
import { FinanceBillsTaskStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsTaskStateMachine";

describe("FinanceBillsTask Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsTaskService();
  const sm = new FinanceBillsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsTask Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
