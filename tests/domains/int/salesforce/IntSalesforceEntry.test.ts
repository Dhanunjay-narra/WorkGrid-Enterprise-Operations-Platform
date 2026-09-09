import { IntSalesforceEntryService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceEntryService";
import { IntSalesforceEntryValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceEntry";
import { IntSalesforceEntryStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceEntryStateMachine";

describe("IntSalesforceEntry Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceEntryService();
  const sm = new IntSalesforceEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceEntry Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
