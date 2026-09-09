import { IntStripeAuditLogService } from "../../../services/core-engine/src/int/stripe/services/IntStripeAuditLogService";
import { IntStripeAuditLogValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeAuditLog";
import { IntStripeAuditLogStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeAuditLogStateMachine";

describe("IntStripeAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IntStripeAuditLogService();
  const sm = new IntStripeAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeAuditLog Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
