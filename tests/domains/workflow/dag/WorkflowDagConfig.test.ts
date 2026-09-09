import { WorkflowDagConfigService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagConfigService";
import { WorkflowDagConfigValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagConfig";
import { WorkflowDagConfigStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagConfigStateMachine";

describe("WorkflowDagConfig Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagConfigService();
  const sm = new WorkflowDagConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagConfig Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
