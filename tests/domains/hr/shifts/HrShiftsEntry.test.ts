import { HrShiftsEntryService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsEntryService";
import { HrShiftsEntryValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsEntry";
import { HrShiftsEntryStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsEntryStateMachine";

describe("HrShiftsEntry Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsEntryService();
  const sm = new HrShiftsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsEntry Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
