import { IntSlackAssignmentService } from "../../../services/core-engine/src/int/slack/services/IntSlackAssignmentService";
import { IntSlackAssignmentValidator } from "../../../packages/types/src/domains/int/slack/IntSlackAssignment";
import { IntSlackAssignmentStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackAssignmentStateMachine";

describe("IntSlackAssignment Comprehensive Domain Test Suite", () => {
  const service = new IntSlackAssignmentService();
  const sm = new IntSlackAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackAssignment Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
