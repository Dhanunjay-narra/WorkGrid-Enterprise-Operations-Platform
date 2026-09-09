import { IntSalesforcePolicyService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforcePolicyService";
import { IntSalesforcePolicyValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforcePolicy";
import { IntSalesforcePolicyStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforcePolicyStateMachine";

describe("IntSalesforcePolicy Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforcePolicyService();
  const sm = new IntSalesforcePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforcePolicy Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforcePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
