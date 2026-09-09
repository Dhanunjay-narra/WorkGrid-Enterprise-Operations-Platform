import { WorkflowExecutionsAuditLogService } from "../../../services/core-engine/src/workflow/executions/services/WorkflowExecutionsAuditLogService";
import { WorkflowExecutionsAuditLogValidator } from "../../../packages/types/src/domains/workflow/executions/WorkflowExecutionsAuditLog";
import { WorkflowExecutionsAuditLogStateMachine } from "../../../services/core-engine/src/workflow/executions/state-machines/WorkflowExecutionsAuditLogStateMachine";

describe("WorkflowExecutionsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new WorkflowExecutionsAuditLogService();
  const sm = new WorkflowExecutionsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowExecutionsAuditLog Instance",
      domain: "workflow_executions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowExecutionsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
