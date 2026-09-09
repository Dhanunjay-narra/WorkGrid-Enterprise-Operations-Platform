import { WorkflowCronsTransactionService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsTransactionService";
import { WorkflowCronsTransactionValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsTransaction";
import { WorkflowCronsTransactionStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsTransactionStateMachine";

describe("WorkflowCronsTransaction Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsTransactionService();
  const sm = new WorkflowCronsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsTransaction Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
