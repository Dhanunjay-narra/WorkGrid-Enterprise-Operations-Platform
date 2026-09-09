import { BiDashboardsItemService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsItemService";
import { BiDashboardsItemValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsItem";
import { BiDashboardsItemStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsItemStateMachine";

describe("BiDashboardsItem Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsItemService();
  const sm = new BiDashboardsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsItem Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
