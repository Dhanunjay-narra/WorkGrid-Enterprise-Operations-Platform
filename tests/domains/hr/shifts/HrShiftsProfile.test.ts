import { HrShiftsProfileService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsProfileService";
import { HrShiftsProfileValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsProfile";
import { HrShiftsProfileStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsProfileStateMachine";

describe("HrShiftsProfile Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsProfileService();
  const sm = new HrShiftsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsProfile Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
