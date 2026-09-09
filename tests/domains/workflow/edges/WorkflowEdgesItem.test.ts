import { WorkflowEdgesItemService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesItemService";
import { WorkflowEdgesItemValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesItem";
import { WorkflowEdgesItemStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesItemStateMachine";

describe("WorkflowEdgesItem Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesItemService();
  const sm = new WorkflowEdgesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesItem Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
