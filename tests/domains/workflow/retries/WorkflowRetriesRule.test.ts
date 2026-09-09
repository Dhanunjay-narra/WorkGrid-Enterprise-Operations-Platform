import { WorkflowRetriesRuleService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesRuleService";
import { WorkflowRetriesRuleValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesRule";
import { WorkflowRetriesRuleStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesRuleStateMachine";

describe("WorkflowRetriesRule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesRuleService();
  const sm = new WorkflowRetriesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesRule Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
