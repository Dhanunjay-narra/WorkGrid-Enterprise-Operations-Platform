import { IntWebhooksConfigService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksConfigService";
import { IntWebhooksConfigValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksConfig";
import { IntWebhooksConfigStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksConfigStateMachine";

describe("IntWebhooksConfig Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksConfigService();
  const sm = new IntWebhooksConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksConfig Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
