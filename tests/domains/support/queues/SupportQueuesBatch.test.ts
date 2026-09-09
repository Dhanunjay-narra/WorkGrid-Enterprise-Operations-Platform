import { SupportQueuesBatchService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesBatchService";
import { SupportQueuesBatchValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesBatch";
import { SupportQueuesBatchStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesBatchStateMachine";

describe("SupportQueuesBatch Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesBatchService();
  const sm = new SupportQueuesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesBatch Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
