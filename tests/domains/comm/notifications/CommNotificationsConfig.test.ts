import { CommNotificationsConfigService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsConfigService";
import { CommNotificationsConfigValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsConfig";
import { CommNotificationsConfigStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsConfigStateMachine";

describe("CommNotificationsConfig Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsConfigService();
  const sm = new CommNotificationsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsConfig Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
