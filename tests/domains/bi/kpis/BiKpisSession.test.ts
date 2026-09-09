import { BiKpisSessionService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisSessionService";
import { BiKpisSessionValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisSession";
import { BiKpisSessionStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisSessionStateMachine";

describe("BiKpisSession Comprehensive Domain Test Suite", () => {
  const service = new BiKpisSessionService();
  const sm = new BiKpisSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisSession Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
