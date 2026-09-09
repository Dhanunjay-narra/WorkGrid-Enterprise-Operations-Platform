import { WorkflowEdgesSessionService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesSessionService";
import { WorkflowEdgesSessionValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesSession";
import { WorkflowEdgesSessionStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesSessionStateMachine";

describe("WorkflowEdgesSession Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesSessionService();
  const sm = new WorkflowEdgesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesSession Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
