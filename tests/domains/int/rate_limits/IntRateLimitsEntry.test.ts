import { IntRateLimitsEntryService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsEntryService";
import { IntRateLimitsEntryValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsEntry";
import { IntRateLimitsEntryStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsEntryStateMachine";

describe("IntRateLimitsEntry Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsEntryService();
  const sm = new IntRateLimitsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsEntry Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
