import { CommWebhooksMetricService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksMetricService";
import { CommWebhooksMetricValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksMetric";
import { CommWebhooksMetricStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksMetricStateMachine";

describe("CommWebhooksMetric Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksMetricService();
  const sm = new CommWebhooksMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksMetric Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
