import { AuditEventService } from "../../../services/core-engine/src/audit/services/AuditEventService";
import { AuditEventValidator } from "../../../packages/types/src/domains/audit/AuditEvent";
import { AuditEventStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditEventStateMachine";

describe("AuditEvent Comprehensive Domain Test Suite", () => {
  const service = new AuditEventService();
  const sm = new AuditEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditEvent Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
