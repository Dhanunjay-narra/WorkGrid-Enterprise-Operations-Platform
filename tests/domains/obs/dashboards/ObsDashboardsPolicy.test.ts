import { ObsDashboardsPolicyService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsPolicyService";
import { ObsDashboardsPolicyValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsPolicy";
import { ObsDashboardsPolicyStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsPolicyStateMachine";

describe("ObsDashboardsPolicy Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsPolicyService();
  const sm = new ObsDashboardsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsPolicy Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
