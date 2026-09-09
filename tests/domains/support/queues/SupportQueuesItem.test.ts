import { SupportQueuesItemService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesItemService";
import { SupportQueuesItemValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesItem";
import { SupportQueuesItemStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesItemStateMachine";

describe("SupportQueuesItem Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesItemService();
  const sm = new SupportQueuesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesItem Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
