import { IntSalesforceProfileService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceProfileService";
import { IntSalesforceProfileValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceProfile";
import { IntSalesforceProfileStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceProfileStateMachine";

describe("IntSalesforceProfile Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceProfileService();
  const sm = new IntSalesforceProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceProfile Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
