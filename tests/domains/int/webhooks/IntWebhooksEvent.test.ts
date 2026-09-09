import { IntWebhooksEventService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksEventService";
import { IntWebhooksEventValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksEvent";
import { IntWebhooksEventStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksEventStateMachine";

describe("IntWebhooksEvent Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksEventService();
  const sm = new IntWebhooksEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksEvent Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
