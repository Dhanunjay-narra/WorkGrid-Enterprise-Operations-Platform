import { AbacAssignmentService } from "../../../services/core-engine/src/abac/services/AbacAssignmentService";
import { AbacAssignmentValidator } from "../../../packages/types/src/domains/abac/AbacAssignment";
import { AbacAssignmentStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacAssignmentStateMachine";

describe("AbacAssignment Comprehensive Domain Test Suite", () => {
  const service = new AbacAssignmentService();
  const sm = new AbacAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacAssignment Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
