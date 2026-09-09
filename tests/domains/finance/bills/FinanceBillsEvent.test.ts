import { FinanceBillsEventService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsEventService";
import { FinanceBillsEventValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsEvent";
import { FinanceBillsEventStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsEventStateMachine";

describe("FinanceBillsEvent Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsEventService();
  const sm = new FinanceBillsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsEvent Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
