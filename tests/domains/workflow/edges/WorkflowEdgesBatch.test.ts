import { WorkflowEdgesBatchService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesBatchService";
import { WorkflowEdgesBatchValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesBatch";
import { WorkflowEdgesBatchStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesBatchStateMachine";

describe("WorkflowEdgesBatch Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesBatchService();
  const sm = new WorkflowEdgesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesBatch Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
