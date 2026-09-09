import { IntWebhooksTaskService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksTaskService";
import { IntWebhooksTaskValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksTask";
import { IntWebhooksTaskStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksTaskStateMachine";

describe("IntWebhooksTask Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksTaskService();
  const sm = new IntWebhooksTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksTask Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
