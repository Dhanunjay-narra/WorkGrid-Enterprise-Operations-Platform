import { SupportQueuesSummaryService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesSummaryService";
import { SupportQueuesSummaryValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesSummary";
import { SupportQueuesSummaryStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesSummaryStateMachine";

describe("SupportQueuesSummary Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesSummaryService();
  const sm = new SupportQueuesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesSummary Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
