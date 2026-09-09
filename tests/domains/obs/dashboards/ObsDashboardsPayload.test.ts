import { ObsDashboardsPayloadService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsPayloadService";
import { ObsDashboardsPayloadValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsPayload";
import { ObsDashboardsPayloadStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsPayloadStateMachine";

describe("ObsDashboardsPayload Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsPayloadService();
  const sm = new ObsDashboardsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsPayload Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
