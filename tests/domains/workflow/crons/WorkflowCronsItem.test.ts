import { WorkflowCronsItemService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsItemService";
import { WorkflowCronsItemValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsItem";
import { WorkflowCronsItemStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsItemStateMachine";

describe("WorkflowCronsItem Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsItemService();
  const sm = new WorkflowCronsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsItem Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
