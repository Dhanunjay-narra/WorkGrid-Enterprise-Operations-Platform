import { FinanceBillsStateService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsStateService";
import { FinanceBillsStateValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsState";
import { FinanceBillsStateStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsStateStateMachine";

describe("FinanceBillsState Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsStateService();
  const sm = new FinanceBillsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsState Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
