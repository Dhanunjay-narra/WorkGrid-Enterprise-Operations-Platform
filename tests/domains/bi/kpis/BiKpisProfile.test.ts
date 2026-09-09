import { BiKpisProfileService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisProfileService";
import { BiKpisProfileValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisProfile";
import { BiKpisProfileStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisProfileStateMachine";

describe("BiKpisProfile Comprehensive Domain Test Suite", () => {
  const service = new BiKpisProfileService();
  const sm = new BiKpisProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisProfile Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
