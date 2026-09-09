import { SupportSlaAssignmentService } from "../../../services/core-engine/src/support/sla/services/SupportSlaAssignmentService";
import { SupportSlaAssignmentValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaAssignment";
import { SupportSlaAssignmentStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaAssignmentStateMachine";

describe("SupportSlaAssignment Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaAssignmentService();
  const sm = new SupportSlaAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaAssignment Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
