import { IntRateLimitsThresholdService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsThresholdService";
import { IntRateLimitsThresholdValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsThreshold";
import { IntRateLimitsThresholdStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsThresholdStateMachine";

describe("IntRateLimitsThreshold Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsThresholdService();
  const sm = new IntRateLimitsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsThreshold Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
