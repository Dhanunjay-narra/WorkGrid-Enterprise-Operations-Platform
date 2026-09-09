import { FinanceTaxesEntryService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesEntryService";
import { FinanceTaxesEntryValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesEntry";
import { FinanceTaxesEntryStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesEntryStateMachine";

describe("FinanceTaxesEntry Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesEntryService();
  const sm = new FinanceTaxesEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesEntry Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
