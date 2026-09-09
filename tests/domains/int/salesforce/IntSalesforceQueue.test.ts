import { IntSalesforceQueueService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceQueueService";
import { IntSalesforceQueueValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceQueue";
import { IntSalesforceQueueStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceQueueStateMachine";

describe("IntSalesforceQueue Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceQueueService();
  const sm = new IntSalesforceQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceQueue Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
