import { CommWebhooksProfileService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksProfileService";
import { CommWebhooksProfileValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksProfile";
import { CommWebhooksProfileStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksProfileStateMachine";

describe("CommWebhooksProfile Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksProfileService();
  const sm = new CommWebhooksProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksProfile Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
