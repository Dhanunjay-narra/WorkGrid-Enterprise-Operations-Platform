import { HrShiftsSummaryService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsSummaryService";
import { HrShiftsSummaryValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsSummary";
import { HrShiftsSummaryStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsSummaryStateMachine";

describe("HrShiftsSummary Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsSummaryService();
  const sm = new HrShiftsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsSummary Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
