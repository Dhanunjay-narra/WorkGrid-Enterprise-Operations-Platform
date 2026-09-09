import { CommCallsAssignmentService } from "../../../services/core-engine/src/comm/calls/services/CommCallsAssignmentService";
import { CommCallsAssignmentValidator } from "../../../packages/types/src/domains/comm/calls/CommCallsAssignment";
import { CommCallsAssignmentStateMachine } from "../../../services/core-engine/src/comm/calls/state-machines/CommCallsAssignmentStateMachine";

describe("CommCallsAssignment Comprehensive Domain Test Suite", () => {
  const service = new CommCallsAssignmentService();
  const sm = new CommCallsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommCallsAssignment Instance",
      domain: "comm_calls",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommCallsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
