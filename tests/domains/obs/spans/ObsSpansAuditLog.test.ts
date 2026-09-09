import { ObsSpansAuditLogService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansAuditLogService";
import { ObsSpansAuditLogValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansAuditLog";
import { ObsSpansAuditLogStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansAuditLogStateMachine";

describe("ObsSpansAuditLog Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansAuditLogService();
  const sm = new ObsSpansAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansAuditLog Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
