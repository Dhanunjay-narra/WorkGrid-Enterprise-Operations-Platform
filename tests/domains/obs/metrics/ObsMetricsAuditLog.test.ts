import { ObsMetricsAuditLogService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsAuditLogService";
import { ObsMetricsAuditLogValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsAuditLog";
import { ObsMetricsAuditLogStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsAuditLogStateMachine";

describe("ObsMetricsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsAuditLogService();
  const sm = new ObsMetricsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsAuditLog Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
