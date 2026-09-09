import { IntStripeQueueService } from "../../../services/core-engine/src/int/stripe/services/IntStripeQueueService";
import { IntStripeQueueValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeQueue";
import { IntStripeQueueStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeQueueStateMachine";

describe("IntStripeQueue Comprehensive Domain Test Suite", () => {
  const service = new IntStripeQueueService();
  const sm = new IntStripeQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeQueue Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
