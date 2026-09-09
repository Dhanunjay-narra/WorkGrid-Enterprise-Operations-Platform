import { CommWebhooksEntryService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksEntryService";
import { CommWebhooksEntryValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksEntry";
import { CommWebhooksEntryStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksEntryStateMachine";

describe("CommWebhooksEntry Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksEntryService();
  const sm = new CommWebhooksEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksEntry Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
