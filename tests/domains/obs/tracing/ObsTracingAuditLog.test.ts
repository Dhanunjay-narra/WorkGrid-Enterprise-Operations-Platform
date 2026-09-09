import { ObsTracingAuditLogService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingAuditLogService";
import { ObsTracingAuditLogValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingAuditLog";
import { ObsTracingAuditLogStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingAuditLogStateMachine";

describe("ObsTracingAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingAuditLogService();
  const sm = new ObsTracingAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingAuditLog Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
