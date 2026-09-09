import { WorkflowRetriesStateService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesStateService";
import { WorkflowRetriesStateValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesState";
import { WorkflowRetriesStateStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesStateStateMachine";

describe("WorkflowRetriesState Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesStateService();
  const sm = new WorkflowRetriesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesState Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
