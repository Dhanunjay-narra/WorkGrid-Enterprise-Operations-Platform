import { IntStripeReportService } from "../../../services/core-engine/src/int/stripe/services/IntStripeReportService";
import { IntStripeReportValidator } from "../../../packages/types/src/domains/int/stripe/IntStripeReport";
import { IntStripeReportStateMachine } from "../../../services/core-engine/src/int/stripe/state-machines/IntStripeReportStateMachine";

describe("IntStripeReport Comprehensive Domain Test Suite", () => {
  const service = new IntStripeReportService();
  const sm = new IntStripeReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntStripeReport Instance",
      domain: "int_stripe",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntStripeReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
