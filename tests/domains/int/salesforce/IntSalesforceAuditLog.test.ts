import { IntSalesforceAuditLogService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceAuditLogService";
import { IntSalesforceAuditLogValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceAuditLog";
import { IntSalesforceAuditLogStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceAuditLogStateMachine";

describe("IntSalesforceAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceAuditLogService();
  const sm = new IntSalesforceAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceAuditLog Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
