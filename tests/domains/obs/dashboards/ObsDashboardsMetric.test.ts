import { ObsDashboardsMetricService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsMetricService";
import { ObsDashboardsMetricValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsMetric";
import { ObsDashboardsMetricStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsMetricStateMachine";

describe("ObsDashboardsMetric Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsMetricService();
  const sm = new ObsDashboardsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsMetric Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
