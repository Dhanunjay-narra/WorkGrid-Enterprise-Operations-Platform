import { ObsDashboardsEventService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsEventService";
import { ObsDashboardsEventValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsEvent";
import { ObsDashboardsEventStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsEventStateMachine";

describe("ObsDashboardsEvent Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsEventService();
  const sm = new ObsDashboardsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsEvent Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
