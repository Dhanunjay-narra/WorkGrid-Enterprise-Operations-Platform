import { BiDashboardsConfigService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsConfigService";
import { BiDashboardsConfigValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsConfig";
import { BiDashboardsConfigStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsConfigStateMachine";

describe("BiDashboardsConfig Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsConfigService();
  const sm = new BiDashboardsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsConfig Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
