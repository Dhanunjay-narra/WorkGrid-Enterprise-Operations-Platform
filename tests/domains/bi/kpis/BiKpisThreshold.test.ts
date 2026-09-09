import { BiKpisThresholdService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisThresholdService";
import { BiKpisThresholdValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisThreshold";
import { BiKpisThresholdStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisThresholdStateMachine";

describe("BiKpisThreshold Comprehensive Domain Test Suite", () => {
  const service = new BiKpisThresholdService();
  const sm = new BiKpisThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisThreshold Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
