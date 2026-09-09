import { IntWebhooksMetricService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksMetricService";
import { IntWebhooksMetricValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksMetric";
import { IntWebhooksMetricStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksMetricStateMachine";

describe("IntWebhooksMetric Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksMetricService();
  const sm = new IntWebhooksMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksMetric Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
