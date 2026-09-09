import { SupportQueuesNodeService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesNodeService";
import { SupportQueuesNodeValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesNode";
import { SupportQueuesNodeStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesNodeStateMachine";

describe("SupportQueuesNode Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesNodeService();
  const sm = new SupportQueuesNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesNode Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
