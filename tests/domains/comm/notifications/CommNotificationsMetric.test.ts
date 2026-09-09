import { CommNotificationsMetricService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsMetricService";
import { CommNotificationsMetricValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsMetric";
import { CommNotificationsMetricStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsMetricStateMachine";

describe("CommNotificationsMetric Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsMetricService();
  const sm = new CommNotificationsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsMetric Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
