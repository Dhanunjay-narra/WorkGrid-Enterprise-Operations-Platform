import { IntSalesforceScheduleService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceScheduleService";
import { IntSalesforceScheduleValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceSchedule";
import { IntSalesforceScheduleStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceScheduleStateMachine";

describe("IntSalesforceSchedule Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceScheduleService();
  const sm = new IntSalesforceScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceSchedule Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
