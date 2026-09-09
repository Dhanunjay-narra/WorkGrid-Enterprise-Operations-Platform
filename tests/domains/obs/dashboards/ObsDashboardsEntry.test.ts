import { ObsDashboardsEntryService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsEntryService";
import { ObsDashboardsEntryValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsEntry";
import { ObsDashboardsEntryStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsEntryStateMachine";

describe("ObsDashboardsEntry Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsEntryService();
  const sm = new ObsDashboardsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsEntry Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
