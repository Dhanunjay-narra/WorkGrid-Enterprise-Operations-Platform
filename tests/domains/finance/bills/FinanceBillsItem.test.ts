import { FinanceBillsItemService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsItemService";
import { FinanceBillsItemValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsItem";
import { FinanceBillsItemStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsItemStateMachine";

describe("FinanceBillsItem Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsItemService();
  const sm = new FinanceBillsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsItem Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
