import { BiKpisPayloadService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisPayloadService";
import { BiKpisPayloadValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisPayload";
import { BiKpisPayloadStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisPayloadStateMachine";

describe("BiKpisPayload Comprehensive Domain Test Suite", () => {
  const service = new BiKpisPayloadService();
  const sm = new BiKpisPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisPayload Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
