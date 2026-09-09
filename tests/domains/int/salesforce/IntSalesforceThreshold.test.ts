import { IntSalesforceThresholdService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceThresholdService";
import { IntSalesforceThresholdValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceThreshold";
import { IntSalesforceThresholdStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceThresholdStateMachine";

describe("IntSalesforceThreshold Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceThresholdService();
  const sm = new IntSalesforceThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceThreshold Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
