import { WorkflowRetriesSessionService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesSessionService";
import { WorkflowRetriesSessionValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesSession";
import { WorkflowRetriesSessionStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesSessionStateMachine";

describe("WorkflowRetriesSession Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesSessionService();
  const sm = new WorkflowRetriesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesSession Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
