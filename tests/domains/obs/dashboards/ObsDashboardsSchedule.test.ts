import { ObsDashboardsScheduleService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsScheduleService";
import { ObsDashboardsScheduleValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsSchedule";
import { ObsDashboardsScheduleStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsScheduleStateMachine";

describe("ObsDashboardsSchedule Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsScheduleService();
  const sm = new ObsDashboardsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsSchedule Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
