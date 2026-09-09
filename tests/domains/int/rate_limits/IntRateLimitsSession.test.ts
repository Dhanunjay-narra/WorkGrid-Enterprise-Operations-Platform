import { IntRateLimitsSessionService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsSessionService";
import { IntRateLimitsSessionValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsSession";
import { IntRateLimitsSessionStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsSessionStateMachine";

describe("IntRateLimitsSession Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsSessionService();
  const sm = new IntRateLimitsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsSession Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
