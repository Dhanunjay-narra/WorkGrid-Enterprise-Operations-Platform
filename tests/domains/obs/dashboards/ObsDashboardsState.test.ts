import { ObsDashboardsStateService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsStateService";
import { ObsDashboardsStateValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsState";
import { ObsDashboardsStateStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsStateStateMachine";

describe("ObsDashboardsState Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsStateService();
  const sm = new ObsDashboardsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsState Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
