import { WorkflowRetriesRecordService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesRecordService";
import { WorkflowRetriesRecordValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesRecord";
import { WorkflowRetriesRecordStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesRecordStateMachine";

describe("WorkflowRetriesRecord Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesRecordService();
  const sm = new WorkflowRetriesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesRecord Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
