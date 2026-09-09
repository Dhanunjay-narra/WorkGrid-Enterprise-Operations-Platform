import { IntSalesforceRecordService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceRecordService";
import { IntSalesforceRecordValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceRecord";
import { IntSalesforceRecordStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceRecordStateMachine";

describe("IntSalesforceRecord Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceRecordService();
  const sm = new IntSalesforceRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceRecord Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
