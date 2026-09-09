import { RbacScheduleService } from "../../../services/core-engine/src/rbac/services/RbacScheduleService";
import { RbacScheduleValidator } from "../../../packages/types/src/domains/rbac/RbacSchedule";
import { RbacScheduleStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacScheduleStateMachine";

describe("RbacSchedule Comprehensive Domain Test Suite", () => {
  const service = new RbacScheduleService();
  const sm = new RbacScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacSchedule Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
