import { WorkflowNodesSummaryService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesSummaryService";
import { WorkflowNodesSummaryValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesSummary";
import { WorkflowNodesSummaryStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesSummaryStateMachine";

describe("WorkflowNodesSummary Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesSummaryService();
  const sm = new WorkflowNodesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesSummary Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
