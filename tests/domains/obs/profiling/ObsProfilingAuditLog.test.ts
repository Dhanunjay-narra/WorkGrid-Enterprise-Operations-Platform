import { ObsProfilingAuditLogService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingAuditLogService";
import { ObsProfilingAuditLogValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingAuditLog";
import { ObsProfilingAuditLogStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingAuditLogStateMachine";

describe("ObsProfilingAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingAuditLogService();
  const sm = new ObsProfilingAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingAuditLog Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
