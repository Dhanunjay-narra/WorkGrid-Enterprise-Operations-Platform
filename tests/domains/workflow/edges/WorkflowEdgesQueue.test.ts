import { WorkflowEdgesQueueService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesQueueService";
import { WorkflowEdgesQueueValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesQueue";
import { WorkflowEdgesQueueStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesQueueStateMachine";

describe("WorkflowEdgesQueue Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesQueueService();
  const sm = new WorkflowEdgesQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesQueue Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
