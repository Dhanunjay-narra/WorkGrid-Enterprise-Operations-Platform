import { WorkflowRetriesSummaryService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesSummaryService";
import { WorkflowRetriesSummaryValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesSummary";
import { WorkflowRetriesSummaryStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesSummaryStateMachine";

describe("WorkflowRetriesSummary Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesSummaryService();
  const sm = new WorkflowRetriesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesSummary Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
