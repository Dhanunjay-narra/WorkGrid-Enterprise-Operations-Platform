import { FinanceTaxesRecordService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesRecordService";
import { FinanceTaxesRecordValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesRecord";
import { FinanceTaxesRecordStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesRecordStateMachine";

describe("FinanceTaxesRecord Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesRecordService();
  const sm = new FinanceTaxesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesRecord Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
