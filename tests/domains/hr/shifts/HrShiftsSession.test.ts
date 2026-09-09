import { HrShiftsSessionService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsSessionService";
import { HrShiftsSessionValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsSession";
import { HrShiftsSessionStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsSessionStateMachine";

describe("HrShiftsSession Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsSessionService();
  const sm = new HrShiftsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsSession Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
