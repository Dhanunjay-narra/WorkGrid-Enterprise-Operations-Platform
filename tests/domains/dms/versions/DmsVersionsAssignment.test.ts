import { DmsVersionsAssignmentService } from "../../../services/core-engine/src/dms/versions/services/DmsVersionsAssignmentService";
import { DmsVersionsAssignmentValidator } from "../../../packages/types/src/domains/dms/versions/DmsVersionsAssignment";
import { DmsVersionsAssignmentStateMachine } from "../../../services/core-engine/src/dms/versions/state-machines/DmsVersionsAssignmentStateMachine";

describe("DmsVersionsAssignment Comprehensive Domain Test Suite", () => {
  const service = new DmsVersionsAssignmentService();
  const sm = new DmsVersionsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsVersionsAssignment Instance",
      domain: "dms_versions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsVersionsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
