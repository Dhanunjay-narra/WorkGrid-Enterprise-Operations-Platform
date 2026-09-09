import { WorkflowRetriesReportService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesReportService";
import { WorkflowRetriesReportValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesReport";
import { WorkflowRetriesReportStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesReportStateMachine";

describe("WorkflowRetriesReport Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesReportService();
  const sm = new WorkflowRetriesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesReport Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
