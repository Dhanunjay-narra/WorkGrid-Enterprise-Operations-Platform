import { CommWebhooksSummaryService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksSummaryService";
import { CommWebhooksSummaryValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksSummary";
import { CommWebhooksSummaryStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksSummaryStateMachine";

describe("CommWebhooksSummary Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksSummaryService();
  const sm = new CommWebhooksSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksSummary Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
