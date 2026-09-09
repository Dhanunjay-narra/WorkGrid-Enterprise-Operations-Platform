import { HrShiftsEventService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsEventService";
import { HrShiftsEventValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsEvent";
import { HrShiftsEventStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsEventStateMachine";

describe("HrShiftsEvent Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsEventService();
  const sm = new HrShiftsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsEvent Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
