import { CommWebhooksEventService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksEventService";
import { CommWebhooksEventValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksEvent";
import { CommWebhooksEventStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksEventStateMachine";

describe("CommWebhooksEvent Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksEventService();
  const sm = new CommWebhooksEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksEvent Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
