import { IntRateLimitsSnapshotService } from "../../../services/core-engine/src/int/rate_limits/services/IntRateLimitsSnapshotService";
import { IntRateLimitsSnapshotValidator } from "../../../packages/types/src/domains/int/rate_limits/IntRateLimitsSnapshot";
import { IntRateLimitsSnapshotStateMachine } from "../../../services/core-engine/src/int/rate_limits/state-machines/IntRateLimitsSnapshotStateMachine";

describe("IntRateLimitsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntRateLimitsSnapshotService();
  const sm = new IntRateLimitsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntRateLimitsSnapshot Instance",
      domain: "int_rate_limits",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntRateLimitsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
