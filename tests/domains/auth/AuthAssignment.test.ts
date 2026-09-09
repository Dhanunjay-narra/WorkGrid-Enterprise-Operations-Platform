import { AuthAssignmentService } from "../../../services/core-engine/src/auth/services/AuthAssignmentService";
import { AuthAssignmentValidator } from "../../../packages/types/src/domains/auth/AuthAssignment";
import { AuthAssignmentStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthAssignmentStateMachine";

describe("AuthAssignment Comprehensive Domain Test Suite", () => {
  const service = new AuthAssignmentService();
  const sm = new AuthAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthAssignment Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
