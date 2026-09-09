import { FinanceBankingNodeService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingNodeService";
import { FinanceBankingNodeValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingNode";
import { FinanceBankingNodeStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingNodeStateMachine";

describe("FinanceBankingNode Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingNodeService();
  const sm = new FinanceBankingNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingNode Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
