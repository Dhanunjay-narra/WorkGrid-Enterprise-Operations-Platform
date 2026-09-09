import { WorkflowApprovalsConfigService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsConfigService";
import { WorkflowApprovalsConfigValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsConfig";
import { WorkflowApprovalsConfigStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsConfigStateMachine";

describe("WorkflowApprovalsConfig Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsConfigService();
  const sm = new WorkflowApprovalsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsConfig Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
