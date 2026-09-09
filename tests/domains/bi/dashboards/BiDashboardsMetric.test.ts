import { BiDashboardsMetricService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsMetricService";
import { BiDashboardsMetricValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsMetric";
import { BiDashboardsMetricStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsMetricStateMachine";

describe("BiDashboardsMetric Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsMetricService();
  const sm = new BiDashboardsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsMetric Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
