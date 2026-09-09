import { HrShiftsThresholdService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsThresholdService";
import { HrShiftsThresholdValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsThreshold";
import { HrShiftsThresholdStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsThresholdStateMachine";

describe("HrShiftsThreshold Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsThresholdService();
  const sm = new HrShiftsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsThreshold Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
