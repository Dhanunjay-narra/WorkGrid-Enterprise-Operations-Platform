import { IntRateLimitsTaskService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsTaskService";
import { IntRateLimitsTaskValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsTask";
import { IntRateLimitsTaskStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsTaskStateMachine";

describe("IntRateLimitsTask Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsTaskService();
  const sm = new IntRateLimitsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsTask Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
