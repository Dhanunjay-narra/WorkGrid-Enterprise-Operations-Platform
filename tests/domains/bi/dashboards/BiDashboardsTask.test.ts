import { BiDashboardsTaskService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsTaskService";
import { BiDashboardsTaskValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsTask";
import { BiDashboardsTaskStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsTaskStateMachine";

describe("BiDashboardsTask Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsTaskService();
  const sm = new BiDashboardsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsTask Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
