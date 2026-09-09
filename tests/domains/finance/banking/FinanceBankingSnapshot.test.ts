import { FinanceBankingSnapshotService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingSnapshotService";
import { FinanceBankingSnapshotValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingSnapshot";
import { FinanceBankingSnapshotStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingSnapshotStateMachine";

describe("FinanceBankingSnapshot Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingSnapshotService();
  const sm = new FinanceBankingSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingSnapshot Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
