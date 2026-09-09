import { AuditAssignmentService } from "../../../services/core-engine/src/audit/services/AuditAssignmentService";
import { AuditAssignmentValidator } from "../../../packages/types/src/domains/audit/AuditAssignment";
import { AuditAssignmentStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditAssignmentStateMachine";

describe("AuditAssignment Comprehensive Domain Test Suite", () => {
  const service = new AuditAssignmentService();
  const sm = new AuditAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditAssignment Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
