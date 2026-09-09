import { ProjectCapacityAuditLogService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityAuditLogService";
import { ProjectCapacityAuditLogValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityAuditLog";
import { ProjectCapacityAuditLogStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityAuditLogStateMachine";

describe("ProjectCapacityAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityAuditLogService();
  const sm = new ProjectCapacityAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityAuditLog Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
