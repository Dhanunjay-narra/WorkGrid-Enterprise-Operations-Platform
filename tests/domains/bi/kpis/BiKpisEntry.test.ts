import { BiKpisEntryService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisEntryService";
import { BiKpisEntryValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisEntry";
import { BiKpisEntryStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisEntryStateMachine";

describe("BiKpisEntry Comprehensive Domain Test Suite", () => {
  const service = new BiKpisEntryService();
  const sm = new BiKpisEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisEntry Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
