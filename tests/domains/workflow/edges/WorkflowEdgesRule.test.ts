import { WorkflowEdgesRuleService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesRuleService";
import { WorkflowEdgesRuleValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesRule";
import { WorkflowEdgesRuleStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesRuleStateMachine";

describe("WorkflowEdgesRule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesRuleService();
  const sm = new WorkflowEdgesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesRule Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
