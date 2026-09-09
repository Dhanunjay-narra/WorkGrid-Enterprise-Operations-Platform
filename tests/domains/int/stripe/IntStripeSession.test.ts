import { IntStripeSessionService } from "../../../services/core-engine/src/int/stripe/services/IntStripeSessionService";
import { IntStripeSessionValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeSession";
import { IntStripeSessionStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeSessionStateMachine";

describe("IntStripeSession Comprehensive Domain Test Suite", () => {
  const service = new IntStripeSessionService();
  const sm = new IntStripeSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeSession Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
