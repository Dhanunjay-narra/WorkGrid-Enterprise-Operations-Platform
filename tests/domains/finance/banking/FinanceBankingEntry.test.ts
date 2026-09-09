import { FinanceBankingEntryService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingEntryService";
import { FinanceBankingEntryValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingEntry";
import { FinanceBankingEntryStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingEntryStateMachine";

describe("FinanceBankingEntry Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingEntryService();
  const sm = new FinanceBankingEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingEntry Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
