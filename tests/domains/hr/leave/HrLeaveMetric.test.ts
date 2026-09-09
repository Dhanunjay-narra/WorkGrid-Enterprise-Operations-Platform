import { HrLeaveMetricService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveMetricService";
import { HrLeaveMetricValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveMetric";
import { HrLeaveMetricStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveMetricStateMachine";

describe("HrLeaveMetric Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveMetricService();
  const sm = new HrLeaveMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveMetric Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
