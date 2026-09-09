import { ObsDashboardsReportService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsReportService";
import { ObsDashboardsReportValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsReport";
import { ObsDashboardsReportStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsReportStateMachine";

describe("ObsDashboardsReport Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsReportService();
  const sm = new ObsDashboardsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsReport Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
