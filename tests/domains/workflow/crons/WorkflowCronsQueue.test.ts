import { WorkflowCronsQueueService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsQueueService";
import { WorkflowCronsQueueValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsQueue";
import { WorkflowCronsQueueStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsQueueStateMachine";

describe("WorkflowCronsQueue Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsQueueService();
  const sm = new WorkflowCronsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsQueue Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
