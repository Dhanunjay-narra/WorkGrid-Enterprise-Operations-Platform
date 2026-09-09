import { IntRateLimitsMetricService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsMetricService";
import { IntRateLimitsMetricValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsMetric";
import { IntRateLimitsMetricStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsMetricStateMachine";

describe("IntRateLimitsMetric Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsMetricService();
  const sm = new IntRateLimitsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsMetric Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
