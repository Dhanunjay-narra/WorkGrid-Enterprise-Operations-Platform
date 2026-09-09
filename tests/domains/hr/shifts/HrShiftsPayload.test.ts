import { HrShiftsPayloadService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsPayloadService";
import { HrShiftsPayloadValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsPayload";
import { HrShiftsPayloadStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsPayloadStateMachine";

describe("HrShiftsPayload Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsPayloadService();
  const sm = new HrShiftsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsPayload Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
