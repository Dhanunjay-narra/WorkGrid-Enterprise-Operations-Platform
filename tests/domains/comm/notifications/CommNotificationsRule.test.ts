import { CommNotificationsRuleService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsRuleService";
import { CommNotificationsRuleValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsRule";
import { CommNotificationsRuleStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsRuleStateMachine";

describe("CommNotificationsRule Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsRuleService();
  const sm = new CommNotificationsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsRule Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
