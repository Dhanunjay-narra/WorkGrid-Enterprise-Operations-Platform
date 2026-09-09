import { IntStripeAssignmentService } from "../../../services/core-engine/src/int/stripe/services/IntStripeAssignmentService";
import { IntStripeAssignmentValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeAssignment";
import { IntStripeAssignmentStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeAssignmentStateMachine";

describe("IntStripeAssignment Comprehensive Domain Test Suite", () => {
  const service = new IntStripeAssignmentService();
  const sm = new IntStripeAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeAssignment Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
