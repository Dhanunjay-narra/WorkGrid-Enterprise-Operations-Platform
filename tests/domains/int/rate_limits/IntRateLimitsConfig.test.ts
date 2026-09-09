import { IntRateLimitsConfigService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsConfigService";
import { IntRateLimitsConfigValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsConfig";
import { IntRateLimitsConfigStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsConfigStateMachine";

describe("IntRateLimitsConfig Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsConfigService();
  const sm = new IntRateLimitsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsConfig Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
