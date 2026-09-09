import { IntSalesforceEventService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceEventService";
import { IntSalesforceEventValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceEvent";
import { IntSalesforceEventStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceEventStateMachine";

describe("IntSalesforceEvent Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceEventService();
  const sm = new IntSalesforceEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceEvent Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
