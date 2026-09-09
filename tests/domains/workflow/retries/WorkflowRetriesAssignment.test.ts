import { WorkflowRetriesAssignmentService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesAssignmentService";
import { WorkflowRetriesAssignmentValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesAssignment";
import { WorkflowRetriesAssignmentStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesAssignmentStateMachine";

describe("WorkflowRetriesAssignment Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesAssignmentService();
  const sm = new WorkflowRetriesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesAssignment Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
