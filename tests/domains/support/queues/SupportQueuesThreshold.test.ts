import { SupportQueuesThresholdService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesThresholdService";
import { SupportQueuesThresholdValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesThreshold";
import { SupportQueuesThresholdStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesThresholdStateMachine";

describe("SupportQueuesThreshold Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesThresholdService();
  const sm = new SupportQueuesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesThreshold Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
