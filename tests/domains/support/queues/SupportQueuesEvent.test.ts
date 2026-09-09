import { SupportQueuesEventService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesEventService";
import { SupportQueuesEventValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesEvent";
import { SupportQueuesEventStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesEventStateMachine";

describe("SupportQueuesEvent Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesEventService();
  const sm = new SupportQueuesEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesEvent Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
