import { FinanceTaxesTransactionService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesTransactionService";
import { FinanceTaxesTransactionValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesTransaction";
import { FinanceTaxesTransactionStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesTransactionStateMachine";

describe("FinanceTaxesTransaction Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesTransactionService();
  const sm = new FinanceTaxesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesTransaction Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
