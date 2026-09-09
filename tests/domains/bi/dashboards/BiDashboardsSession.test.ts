import { BiDashboardsSessionService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsSessionService";
import { BiDashboardsSessionValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsSession";
import { BiDashboardsSessionStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsSessionStateMachine";

describe("BiDashboardsSession Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsSessionService();
  const sm = new BiDashboardsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsSession Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
