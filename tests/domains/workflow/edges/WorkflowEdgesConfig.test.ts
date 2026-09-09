import { WorkflowEdgesConfigService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesConfigService";
import { WorkflowEdgesConfigValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesConfig";
import { WorkflowEdgesConfigStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesConfigStateMachine";

describe("WorkflowEdgesConfig Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesConfigService();
  const sm = new WorkflowEdgesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesConfig Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
