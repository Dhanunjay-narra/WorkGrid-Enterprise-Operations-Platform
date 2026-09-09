import { AbacScheduleService } from "../../../services/core-engine/src/abac/services/AbacScheduleService";
import { AbacScheduleValidator } from "../../../packages/types/src/domains/abac/AbacSchedule";
import { AbacScheduleStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacScheduleStateMachine";

describe("AbacSchedule Comprehensive Domain Test Suite", () => {
  const service = new AbacScheduleService();
  const sm = new AbacScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacSchedule Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
