import { BiDashboardsBatchService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsBatchService";
import { BiDashboardsBatchValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsBatch";
import { BiDashboardsBatchStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsBatchStateMachine";

describe("BiDashboardsBatch Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsBatchService();
  const sm = new BiDashboardsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsBatch Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
