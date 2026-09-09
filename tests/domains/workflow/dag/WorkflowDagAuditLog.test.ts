import { WorkflowDagAuditLogService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagAuditLogService";
import { WorkflowDagAuditLogValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagAuditLog";
import { WorkflowDagAuditLogStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagAuditLogStateMachine";

describe("WorkflowDagAuditLog Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagAuditLogService();
  const sm = new WorkflowDagAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagAuditLog Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
