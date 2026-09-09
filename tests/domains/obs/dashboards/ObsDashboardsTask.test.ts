import { ObsDashboardsTaskService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsTaskService";
import { ObsDashboardsTaskValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsTask";
import { ObsDashboardsTaskStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsTaskStateMachine";

describe("ObsDashboardsTask Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsTaskService();
  const sm = new ObsDashboardsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsTask Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
