import { IntStripeMappingService } from "../../../services/core-engine/src/int/stripe/services/IntStripeMappingService";
import { IntStripeMappingValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeMapping";
import { IntStripeMappingStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeMappingStateMachine";

describe("IntStripeMapping Comprehensive Domain Test Suite", () => {
  const service = new IntStripeMappingService();
  const sm = new IntStripeMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeMapping Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
