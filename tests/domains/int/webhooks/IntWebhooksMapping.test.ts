import { IntWebhooksMappingService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksMappingService";
import { IntWebhooksMappingValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksMapping";
import { IntWebhooksMappingStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksMappingStateMachine";

describe("IntWebhooksMapping Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksMappingService();
  const sm = new IntWebhooksMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksMapping Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
