import { WorkflowRetriesPolicyService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesPolicyService";
import { WorkflowRetriesPolicyValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesPolicy";
import { WorkflowRetriesPolicyStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesPolicyStateMachine";

describe("WorkflowRetriesPolicy Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesPolicyService();
  const sm = new WorkflowRetriesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesPolicy Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
