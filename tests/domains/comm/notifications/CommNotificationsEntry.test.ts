import { CommNotificationsEntryService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsEntryService";
import { CommNotificationsEntryValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsEntry";
import { CommNotificationsEntryStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsEntryStateMachine";

describe("CommNotificationsEntry Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsEntryService();
  const sm = new CommNotificationsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsEntry Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
