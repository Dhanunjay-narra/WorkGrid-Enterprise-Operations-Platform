import { IntRateLimitsSummaryService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsSummaryService";
import { IntRateLimitsSummaryValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsSummary";
import { IntRateLimitsSummaryStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsSummaryStateMachine";

describe("IntRateLimitsSummary Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsSummaryService();
  const sm = new IntRateLimitsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsSummary Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
