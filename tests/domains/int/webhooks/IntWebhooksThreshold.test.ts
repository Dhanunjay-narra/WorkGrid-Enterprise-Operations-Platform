import { IntWebhooksThresholdService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksThresholdService";
import { IntWebhooksThresholdValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksThreshold";
import { IntWebhooksThresholdStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksThresholdStateMachine";

describe("IntWebhooksThreshold Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksThresholdService();
  const sm = new IntWebhooksThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksThreshold Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
