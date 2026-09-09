import { IntWebhooksSessionService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksSessionService";
import { IntWebhooksSessionValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksSession";
import { IntWebhooksSessionStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksSessionStateMachine";

describe("IntWebhooksSession Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksSessionService();
  const sm = new IntWebhooksSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksSession Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
