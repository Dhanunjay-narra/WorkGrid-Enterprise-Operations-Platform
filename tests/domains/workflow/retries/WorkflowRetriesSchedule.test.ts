import { WorkflowRetriesScheduleService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesScheduleService";
import { WorkflowRetriesScheduleValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesSchedule";
import { WorkflowRetriesScheduleStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesScheduleStateMachine";

describe("WorkflowRetriesSchedule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesScheduleService();
  const sm = new WorkflowRetriesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesSchedule Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
