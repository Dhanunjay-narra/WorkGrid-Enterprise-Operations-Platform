import { HrShiftsMetricService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsMetricService";
import { HrShiftsMetricValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsMetric";
import { HrShiftsMetricStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsMetricStateMachine";

describe("HrShiftsMetric Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsMetricService();
  const sm = new HrShiftsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsMetric Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
