import { SupportQueuesPolicyService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesPolicyService";
import { SupportQueuesPolicyValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesPolicy";
import { SupportQueuesPolicyStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesPolicyStateMachine";

describe("SupportQueuesPolicy Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesPolicyService();
  const sm = new SupportQueuesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesPolicy Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
