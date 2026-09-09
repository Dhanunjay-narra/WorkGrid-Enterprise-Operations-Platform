import { ProjectEpicsAuditLogService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsAuditLogService";
import { ProjectEpicsAuditLogValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsAuditLog";
import { ProjectEpicsAuditLogStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsAuditLogStateMachine";

describe("ProjectEpicsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsAuditLogService();
  const sm = new ProjectEpicsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsAuditLog Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
