import { FinanceTaxesSnapshotService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesSnapshotService";
import { FinanceTaxesSnapshotValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesSnapshot";
import { FinanceTaxesSnapshotStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesSnapshotStateMachine";

describe("FinanceTaxesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesSnapshotService();
  const sm = new FinanceTaxesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesSnapshot Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
