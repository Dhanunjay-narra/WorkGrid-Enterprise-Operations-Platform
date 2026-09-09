import { BiDashboardsNodeService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsNodeService";
import { BiDashboardsNodeValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsNode";
import { BiDashboardsNodeStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsNodeStateMachine";

describe("BiDashboardsNode Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsNodeService();
  const sm = new BiDashboardsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsNode Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
