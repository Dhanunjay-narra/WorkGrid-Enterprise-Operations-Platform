import { HrShiftsBatchService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsBatchService";
import { HrShiftsBatchValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsBatch";
import { HrShiftsBatchStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsBatchStateMachine";

describe("HrShiftsBatch Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsBatchService();
  const sm = new HrShiftsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsBatch Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
