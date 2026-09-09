import { IntSalesforceItemService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceItemService";
import { IntSalesforceItemValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceItem";
import { IntSalesforceItemStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceItemStateMachine";

describe("IntSalesforceItem Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceItemService();
  const sm = new IntSalesforceItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceItem Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
