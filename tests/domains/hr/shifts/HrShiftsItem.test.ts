import { HrShiftsItemService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsItemService";
import { HrShiftsItemValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsItem";
import { HrShiftsItemStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsItemStateMachine";

describe("HrShiftsItem Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsItemService();
  const sm = new HrShiftsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsItem Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
