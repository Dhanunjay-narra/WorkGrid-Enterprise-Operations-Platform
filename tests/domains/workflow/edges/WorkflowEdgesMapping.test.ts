import { WorkflowEdgesMappingService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesMappingService";
import { WorkflowEdgesMappingValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesMapping";
import { WorkflowEdgesMappingStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesMappingStateMachine";

describe("WorkflowEdgesMapping Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesMappingService();
  const sm = new WorkflowEdgesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesMapping Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
