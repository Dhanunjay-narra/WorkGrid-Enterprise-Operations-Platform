import { WorkflowRetriesPayloadService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesPayloadService";
import { WorkflowRetriesPayloadValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesPayload";
import { WorkflowRetriesPayloadStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesPayloadStateMachine";

describe("WorkflowRetriesPayload Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesPayloadService();
  const sm = new WorkflowRetriesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesPayload Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
