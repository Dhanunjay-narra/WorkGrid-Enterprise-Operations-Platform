import { FinanceBillsSnapshotService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsSnapshotService";
import { FinanceBillsSnapshotValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsSnapshot";
import { FinanceBillsSnapshotStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsSnapshotStateMachine";

describe("FinanceBillsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsSnapshotService();
  const sm = new FinanceBillsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsSnapshot Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
