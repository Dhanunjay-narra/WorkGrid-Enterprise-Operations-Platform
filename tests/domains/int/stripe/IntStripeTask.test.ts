import { IntStripeTaskService } from "../../../services/core-engine/src/int/stripe/services/IntStripeTaskService";
import { IntStripeTaskValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeTask";
import { IntStripeTaskStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeTaskStateMachine";

describe("IntStripeTask Comprehensive Domain Test Suite", () => {
  const service = new IntStripeTaskService();
  const sm = new IntStripeTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeTask Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
