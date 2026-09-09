import { CommNotificationsProfileService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsProfileService";
import { CommNotificationsProfileValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsProfile";
import { CommNotificationsProfileStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsProfileStateMachine";

describe("CommNotificationsProfile Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsProfileService();
  const sm = new CommNotificationsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsProfile Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
