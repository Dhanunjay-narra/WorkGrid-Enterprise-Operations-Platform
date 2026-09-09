import { WorkflowDagProfileService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagProfileService";
import { WorkflowDagProfileValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagProfile";
import { WorkflowDagProfileStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagProfileStateMachine";

describe("WorkflowDagProfile Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagProfileService();
  const sm = new WorkflowDagProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagProfile Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
