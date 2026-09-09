import { WorkflowEdgesAssignmentService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesAssignmentService";
import { WorkflowEdgesAssignmentValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesAssignment";
import { WorkflowEdgesAssignmentStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesAssignmentStateMachine";

describe("WorkflowEdgesAssignment Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesAssignmentService();
  const sm = new WorkflowEdgesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesAssignment Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
