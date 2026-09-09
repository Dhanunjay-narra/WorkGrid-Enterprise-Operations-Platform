import { FinanceTaxesPolicyService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesPolicyService";
import { FinanceTaxesPolicyValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesPolicy";
import { FinanceTaxesPolicyStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesPolicyStateMachine";

describe("FinanceTaxesPolicy Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesPolicyService();
  const sm = new FinanceTaxesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesPolicy Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
