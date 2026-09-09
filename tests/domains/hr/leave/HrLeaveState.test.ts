import { HrLeaveStateService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveStateService";
import { HrLeaveStateValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveState";
import { HrLeaveStateStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveStateStateMachine";

describe("HrLeaveState Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveStateService();
  const sm = new HrLeaveStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveState Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
