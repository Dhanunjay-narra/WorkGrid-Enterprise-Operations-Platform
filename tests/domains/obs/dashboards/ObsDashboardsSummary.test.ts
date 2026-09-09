import { ObsDashboardsSummaryService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsSummaryService";
import { ObsDashboardsSummaryValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsSummary";
import { ObsDashboardsSummaryStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsSummaryStateMachine";

describe("ObsDashboardsSummary Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsSummaryService();
  const sm = new ObsDashboardsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsSummary Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
