import { SupportQueuesScheduleService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesScheduleService";
import { SupportQueuesScheduleValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesSchedule";
import { SupportQueuesScheduleStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesScheduleStateMachine";

describe("SupportQueuesSchedule Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesScheduleService();
  const sm = new SupportQueuesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesSchedule Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
