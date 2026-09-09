import { BiKpisQueueService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisQueueService";
import { BiKpisQueueValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisQueue";
import { BiKpisQueueStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisQueueStateMachine";

describe("BiKpisQueue Comprehensive Domain Test Suite", () => {
  const service = new BiKpisQueueService();
  const sm = new BiKpisQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisQueue Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
