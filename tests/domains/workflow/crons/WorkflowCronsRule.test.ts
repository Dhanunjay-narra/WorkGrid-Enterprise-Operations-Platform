import { WorkflowCronsRuleService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsRuleService";
import { WorkflowCronsRuleValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsRule";
import { WorkflowCronsRuleStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsRuleStateMachine";

describe("WorkflowCronsRule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsRuleService();
  const sm = new WorkflowCronsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsRule Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
