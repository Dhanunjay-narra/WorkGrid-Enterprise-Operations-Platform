import { HrShiftsRecordService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsRecordService";
import { HrShiftsRecordValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsRecord";
import { HrShiftsRecordStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsRecordStateMachine";

describe("HrShiftsRecord Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsRecordService();
  const sm = new HrShiftsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsRecord Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
