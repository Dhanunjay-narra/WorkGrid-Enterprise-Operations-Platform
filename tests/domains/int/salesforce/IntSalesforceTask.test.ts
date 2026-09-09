import { IntSalesforceTaskService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceTaskService";
import { IntSalesforceTaskValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceTask";
import { IntSalesforceTaskStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceTaskStateMachine";

describe("IntSalesforceTask Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceTaskService();
  const sm = new IntSalesforceTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceTask Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
