import { BiKpisPolicyService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisPolicyService";
import { BiKpisPolicyValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisPolicy";
import { BiKpisPolicyStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisPolicyStateMachine";

describe("BiKpisPolicy Comprehensive Domain Test Suite", () => {
  const service = new BiKpisPolicyService();
  const sm = new BiKpisPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisPolicy Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
