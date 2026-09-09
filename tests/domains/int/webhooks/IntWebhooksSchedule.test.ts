import { IntWebhooksScheduleService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksScheduleService";
import { IntWebhooksScheduleValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksSchedule";
import { IntWebhooksScheduleStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksScheduleStateMachine";

describe("IntWebhooksSchedule Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksScheduleService();
  const sm = new IntWebhooksScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksSchedule Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
