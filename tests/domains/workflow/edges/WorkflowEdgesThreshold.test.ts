import { WorkflowEdgesThresholdService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesThresholdService";
import { WorkflowEdgesThresholdValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesThreshold";
import { WorkflowEdgesThresholdStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesThresholdStateMachine";

describe("WorkflowEdgesThreshold Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesThresholdService();
  const sm = new WorkflowEdgesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesThreshold Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
