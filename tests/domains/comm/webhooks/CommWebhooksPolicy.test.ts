import { CommWebhooksPolicyService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksPolicyService";
import { CommWebhooksPolicyValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksPolicy";
import { CommWebhooksPolicyStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksPolicyStateMachine";

describe("CommWebhooksPolicy Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksPolicyService();
  const sm = new CommWebhooksPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksPolicy Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
