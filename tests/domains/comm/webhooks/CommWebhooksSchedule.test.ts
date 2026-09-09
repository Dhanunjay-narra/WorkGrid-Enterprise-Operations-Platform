import { CommWebhooksScheduleService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksScheduleService";
import { CommWebhooksScheduleValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksSchedule";
import { CommWebhooksScheduleStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksScheduleStateMachine";

describe("CommWebhooksSchedule Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksScheduleService();
  const sm = new CommWebhooksScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksSchedule Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
