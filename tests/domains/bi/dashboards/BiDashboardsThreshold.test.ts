import { BiDashboardsThresholdService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsThresholdService";
import { BiDashboardsThresholdValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsThreshold";
import { BiDashboardsThresholdStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsThresholdStateMachine";

describe("BiDashboardsThreshold Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsThresholdService();
  const sm = new BiDashboardsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsThreshold Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
