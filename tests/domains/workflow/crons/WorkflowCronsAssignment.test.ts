import { WorkflowCronsAssignmentService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsAssignmentService";
import { WorkflowCronsAssignmentValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsAssignment";
import { WorkflowCronsAssignmentStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsAssignmentStateMachine";

describe("WorkflowCronsAssignment Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsAssignmentService();
  const sm = new WorkflowCronsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsAssignment Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
