import { IntStripeThresholdService } from "../../../services/core-engine/src/int/stripe/services/IntStripeThresholdService";
import { IntStripeThresholdValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeThreshold";
import { IntStripeThresholdStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeThresholdStateMachine";

describe("IntStripeThreshold Comprehensive Domain Test Suite", () => {
  const service = new IntStripeThresholdService();
  const sm = new IntStripeThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeThreshold Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
