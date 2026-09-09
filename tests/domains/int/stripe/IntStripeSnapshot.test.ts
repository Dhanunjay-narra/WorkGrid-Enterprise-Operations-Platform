import { IntStripeSnapshotService } from "../../../services/core-engine/src/int/stripe/services/IntStripeSnapshotService";
import { IntStripeSnapshotValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeSnapshot";
import { IntStripeSnapshotStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeSnapshotStateMachine";

describe("IntStripeSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntStripeSnapshotService();
  const sm = new IntStripeSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeSnapshot Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
