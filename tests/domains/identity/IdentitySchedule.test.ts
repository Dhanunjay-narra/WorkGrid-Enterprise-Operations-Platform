import { IdentityScheduleService } from "../../../services/core-engine/src/identity/services/IdentityScheduleService";
import { IdentityScheduleValidator } from "../../../packages/types/src/domains/identity/IdentitySchedule";
import { IdentityScheduleStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityScheduleStateMachine";

describe("IdentitySchedule Comprehensive Domain Test Suite", () => {
  const service = new IdentityScheduleService();
  const sm = new IdentityScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentitySchedule Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
