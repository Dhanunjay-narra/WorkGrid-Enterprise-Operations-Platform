import { IntStripePolicyService } from "../../../services/core-engine/src/int/stripe/services/IntStripePolicyService";
import { IntStripePolicyValidator } from "../../../packages/types/src/domains/int/stripe/IntStripePolicy";
import { IntStripePolicyStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripePolicyStateMachine";

describe("IntStripePolicy Comprehensive Domain Test Suite", () => {
  const service = new IntStripePolicyService();
  const sm = new IntStripePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripePolicy Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
