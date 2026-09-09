import { RbacAssignmentService } from "../../../services/core-engine/src/rbac/services/RbacAssignmentService";
import { RbacAssignmentValidator } from "../../../packages/types/src/domains/rbac/RbacAssignment";
import { RbacAssignmentStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacAssignmentStateMachine";

describe("RbacAssignment Comprehensive Domain Test Suite", () => {
  const service = new RbacAssignmentService();
  const sm = new RbacAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacAssignment Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
