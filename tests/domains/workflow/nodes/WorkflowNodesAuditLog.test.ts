import { WorkflowNodesAuditLogService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesAuditLogService";
import { WorkflowNodesAuditLogValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesAuditLog";
import { WorkflowNodesAuditLogStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesAuditLogStateMachine";

describe("WorkflowNodesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesAuditLogService();
  const sm = new WorkflowNodesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesAuditLog Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
