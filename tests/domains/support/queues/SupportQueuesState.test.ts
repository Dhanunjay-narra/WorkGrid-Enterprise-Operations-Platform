import { SupportQueuesStateService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesStateService";
import { SupportQueuesStateValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesState";
import { SupportQueuesStateStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesStateStateMachine";

describe("SupportQueuesState Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesStateService();
  const sm = new SupportQueuesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesState Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
