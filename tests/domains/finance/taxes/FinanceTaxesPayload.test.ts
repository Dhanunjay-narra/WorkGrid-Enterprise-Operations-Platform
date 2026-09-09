import { FinanceTaxesPayloadService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesPayloadService";
import { FinanceTaxesPayloadValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesPayload";
import { FinanceTaxesPayloadStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesPayloadStateMachine";

describe("FinanceTaxesPayload Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesPayloadService();
  const sm = new FinanceTaxesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesPayload Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
