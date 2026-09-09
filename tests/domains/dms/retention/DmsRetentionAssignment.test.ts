import { DmsRetentionAssignmentService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionAssignmentService";
import { DmsRetentionAssignmentValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionAssignment";
import { DmsRetentionAssignmentStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionAssignmentStateMachine";

describe("DmsRetentionAssignment Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionAssignmentService();
  const sm = new DmsRetentionAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionAssignment Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
