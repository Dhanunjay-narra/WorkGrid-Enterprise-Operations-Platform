import { SupportEscalationAssignmentService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationAssignmentService";
import { SupportEscalationAssignmentValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationAssignment";
import { SupportEscalationAssignmentStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationAssignmentStateMachine";

describe("SupportEscalationAssignment Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationAssignmentService();
  const sm = new SupportEscalationAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationAssignment Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
