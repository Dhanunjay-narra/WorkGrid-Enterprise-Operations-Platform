import { WorkflowCronsBatchService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsBatchService";
import { WorkflowCronsBatchValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsBatch";
import { WorkflowCronsBatchStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsBatchStateMachine";

describe("WorkflowCronsBatch Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsBatchService();
  const sm = new WorkflowCronsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsBatch Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
