import { WorkflowRetriesThresholdService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesThresholdService";
import { WorkflowRetriesThresholdValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesThreshold";
import { WorkflowRetriesThresholdStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesThresholdStateMachine";

describe("WorkflowRetriesThreshold Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesThresholdService();
  const sm = new WorkflowRetriesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesThreshold Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
