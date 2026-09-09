import { BiKpisRuleService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisRuleService";
import { BiKpisRuleValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisRule";
import { BiKpisRuleStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisRuleStateMachine";

describe("BiKpisRule Comprehensive Domain Test Suite", () => {
  const service = new BiKpisRuleService();
  const sm = new BiKpisRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisRule Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
