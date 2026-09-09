import { AuditTaskService } from "../../../services/core-engine/src/audit/services/AuditTaskService";
import { AuditTaskValidator } from "../../../packages/types/src/domains/audit/AuditTask";
import { AuditTaskStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditTaskStateMachine";

describe("AuditTask Comprehensive Domain Test Suite", () => {
  const service = new AuditTaskService();
  const sm = new AuditTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditTask Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
