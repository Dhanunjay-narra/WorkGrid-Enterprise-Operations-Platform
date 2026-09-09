import { BiDashboardsProfileService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsProfileService";
import { BiDashboardsProfileValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsProfile";
import { BiDashboardsProfileStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsProfileStateMachine";

describe("BiDashboardsProfile Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsProfileService();
  const sm = new BiDashboardsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsProfile Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
