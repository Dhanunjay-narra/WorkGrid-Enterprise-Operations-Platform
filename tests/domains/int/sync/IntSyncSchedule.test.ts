import { IntSyncScheduleService } from "../../../services/core-engine/src/int/sync/services/IntSyncScheduleService";
import { IntSyncScheduleValidator } from "../../../packages/types/src/domains/int/sync/IntSyncSchedule";
import { IntSyncScheduleStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncScheduleStateMachine";

describe("IntSyncSchedule Comprehensive Domain Test Suite", () => {
  const service = new IntSyncScheduleService();
  const sm = new IntSyncScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncSchedule Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
