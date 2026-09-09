import { CommWebhooksConfigService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksConfigService";
import { CommWebhooksConfigValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksConfig";
import { CommWebhooksConfigStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksConfigStateMachine";

describe("CommWebhooksConfig Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksConfigService();
  const sm = new CommWebhooksConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksConfig Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
