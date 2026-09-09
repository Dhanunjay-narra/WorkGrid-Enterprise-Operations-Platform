import { BiKpisStateService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisStateService";
import { BiKpisStateValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisState";
import { BiKpisStateStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisStateStateMachine";

describe("BiKpisState Comprehensive Domain Test Suite", () => {
  const service = new BiKpisStateService();
  const sm = new BiKpisStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisState Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
