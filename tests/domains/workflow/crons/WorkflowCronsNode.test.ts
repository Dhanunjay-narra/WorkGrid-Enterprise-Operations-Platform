import { WorkflowCronsNodeService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsNodeService";
import { WorkflowCronsNodeValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsNode";
import { WorkflowCronsNodeStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsNodeStateMachine";

describe("WorkflowCronsNode Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsNodeService();
  const sm = new WorkflowCronsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsNode Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
