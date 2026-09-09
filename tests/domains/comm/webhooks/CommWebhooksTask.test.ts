import { CommWebhooksTaskService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksTaskService";
import { CommWebhooksTaskValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksTask";
import { CommWebhooksTaskStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksTaskStateMachine";

describe("CommWebhooksTask Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksTaskService();
  const sm = new CommWebhooksTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksTask Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
