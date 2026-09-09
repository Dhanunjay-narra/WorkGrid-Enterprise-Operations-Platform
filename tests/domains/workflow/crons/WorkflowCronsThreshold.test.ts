import { WorkflowCronsThresholdService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsThresholdService";
import { WorkflowCronsThresholdValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsThreshold";
import { WorkflowCronsThresholdStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsThresholdStateMachine";

describe("WorkflowCronsThreshold Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsThresholdService();
  const sm = new WorkflowCronsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsThreshold Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
