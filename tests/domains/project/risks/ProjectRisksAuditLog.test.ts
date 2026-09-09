import { ProjectRisksAuditLogService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksAuditLogService";
import { ProjectRisksAuditLogValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksAuditLog";
import { ProjectRisksAuditLogStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksAuditLogStateMachine";

describe("ProjectRisksAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksAuditLogService();
  const sm = new ProjectRisksAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksAuditLog Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
