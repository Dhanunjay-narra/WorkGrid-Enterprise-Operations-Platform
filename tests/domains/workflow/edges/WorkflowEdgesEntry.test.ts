import { WorkflowEdgesEntryService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesEntryService";
import { WorkflowEdgesEntryValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesEntry";
import { WorkflowEdgesEntryStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesEntryStateMachine";

describe("WorkflowEdgesEntry Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesEntryService();
  const sm = new WorkflowEdgesEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesEntry Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
