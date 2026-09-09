import { SecurityAssignmentService } from "../../../services/core-engine/src/security/services/SecurityAssignmentService";
import { SecurityAssignmentValidator } from "../../../packages/types/src/domains/security/SecurityAssignment";
import { SecurityAssignmentStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityAssignmentStateMachine";

describe("SecurityAssignment Comprehensive Domain Test Suite", () => {
  const service = new SecurityAssignmentService();
  const sm = new SecurityAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityAssignment Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
