import { WorkflowDagTransactionService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagTransactionService";
import { WorkflowDagTransactionValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagTransaction";
import { WorkflowDagTransactionStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagTransactionStateMachine";

describe("WorkflowDagTransaction Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagTransactionService();
  const sm = new WorkflowDagTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagTransaction Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
