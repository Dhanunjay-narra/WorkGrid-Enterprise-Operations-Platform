import { WorkflowRetriesBatchService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesBatchService";
import { WorkflowRetriesBatchValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesBatch";
import { WorkflowRetriesBatchStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesBatchStateMachine";

describe("WorkflowRetriesBatch Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesBatchService();
  const sm = new WorkflowRetriesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesBatch Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
