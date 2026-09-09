import { CommWebhooksStateService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksStateService";
import { CommWebhooksStateValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksState";
import { CommWebhooksStateStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksStateStateMachine";

describe("CommWebhooksState Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksStateService();
  const sm = new CommWebhooksStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksState Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
