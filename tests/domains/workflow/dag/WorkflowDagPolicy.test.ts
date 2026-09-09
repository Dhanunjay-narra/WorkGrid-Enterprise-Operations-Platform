import { WorkflowDagPolicyService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagPolicyService";
import { WorkflowDagPolicyValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagPolicy";
import { WorkflowDagPolicyStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagPolicyStateMachine";

describe("WorkflowDagPolicy Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagPolicyService();
  const sm = new WorkflowDagPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagPolicy Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
