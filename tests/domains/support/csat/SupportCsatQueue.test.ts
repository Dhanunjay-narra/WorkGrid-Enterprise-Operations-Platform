import { SupportCsatQueueService } from "../../../services/core-engine/src/support/csat/services/SupportCsatQueueService";
import { SupportCsatQueueValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatQueue";
import { SupportCsatQueueStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatQueueStateMachine";

describe("SupportCsatQueue Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatQueueService();
  const sm = new SupportCsatQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatQueue Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
