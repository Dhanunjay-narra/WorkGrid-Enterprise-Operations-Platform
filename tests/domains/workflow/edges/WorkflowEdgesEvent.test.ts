import { WorkflowEdgesEventService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesEventService";
import { WorkflowEdgesEventValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesEvent";
import { WorkflowEdgesEventStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesEventStateMachine";

describe("WorkflowEdgesEvent Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesEventService();
  const sm = new WorkflowEdgesEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesEvent Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
