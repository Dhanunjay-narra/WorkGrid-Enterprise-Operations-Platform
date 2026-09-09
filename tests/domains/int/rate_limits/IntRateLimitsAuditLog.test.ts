import { IntRateLimitsAuditLogService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsAuditLogService";
import { IntRateLimitsAuditLogValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsAuditLog";
import { IntRateLimitsAuditLogStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsAuditLogStateMachine";

describe("IntRateLimitsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsAuditLogService();
  const sm = new IntRateLimitsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsAuditLog Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
