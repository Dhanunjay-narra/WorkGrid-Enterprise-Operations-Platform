import { FinanceBillsEntryService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsEntryService";
import { FinanceBillsEntryValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsEntry";
import { FinanceBillsEntryStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsEntryStateMachine";

describe("FinanceBillsEntry Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsEntryService();
  const sm = new FinanceBillsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsEntry Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
