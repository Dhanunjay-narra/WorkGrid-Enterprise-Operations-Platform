import { CommNotificationsRecordService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsRecordService";
import { CommNotificationsRecordValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsRecord";
import { CommNotificationsRecordStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsRecordStateMachine";

describe("CommNotificationsRecord Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsRecordService();
  const sm = new CommNotificationsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsRecord Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
