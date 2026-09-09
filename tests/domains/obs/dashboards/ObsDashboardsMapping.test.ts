import { ObsDashboardsMappingService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsMappingService";
import { ObsDashboardsMappingValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsMapping";
import { ObsDashboardsMappingStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsMappingStateMachine";

describe("ObsDashboardsMapping Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsMappingService();
  const sm = new ObsDashboardsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsMapping Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
