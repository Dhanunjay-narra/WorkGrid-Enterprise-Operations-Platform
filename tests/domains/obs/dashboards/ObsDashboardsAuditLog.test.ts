import { ObsDashboardsAuditLogService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsAuditLogService";
import { ObsDashboardsAuditLogValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsAuditLog";
import { ObsDashboardsAuditLogStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsAuditLogStateMachine";

describe("ObsDashboardsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsAuditLogService();
  const sm = new ObsDashboardsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsAuditLog Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
