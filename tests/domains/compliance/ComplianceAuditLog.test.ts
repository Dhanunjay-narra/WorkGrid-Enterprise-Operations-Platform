import { ComplianceAuditLogService } from "../../../services/core-engine/src/compliance/services/ComplianceAuditLogService";
import { ComplianceAuditLogValidator } from "../../../packages/types/src/domains/compliance/ComplianceAuditLog";
import { ComplianceAuditLogStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceAuditLogStateMachine";

describe("ComplianceAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ComplianceAuditLogService();
  const sm = new ComplianceAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceAuditLog Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
