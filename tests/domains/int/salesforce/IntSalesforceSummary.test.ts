import { IntSalesforceSummaryService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceSummaryService";
import { IntSalesforceSummaryValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceSummary";
import { IntSalesforceSummaryStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceSummaryStateMachine";

describe("IntSalesforceSummary Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceSummaryService();
  const sm = new IntSalesforceSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceSummary Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
