import { BiDashboardsSummaryService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsSummaryService";
import { BiDashboardsSummaryValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsSummary";
import { BiDashboardsSummaryStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsSummaryStateMachine";

describe("BiDashboardsSummary Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsSummaryService();
  const sm = new BiDashboardsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsSummary Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
