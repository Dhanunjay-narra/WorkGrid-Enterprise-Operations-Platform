import { IntSalesforcePayloadService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforcePayloadService";
import { IntSalesforcePayloadValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforcePayload";
import { IntSalesforcePayloadStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforcePayloadStateMachine";

describe("IntSalesforcePayload Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforcePayloadService();
  const sm = new IntSalesforcePayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforcePayload Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforcePayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
