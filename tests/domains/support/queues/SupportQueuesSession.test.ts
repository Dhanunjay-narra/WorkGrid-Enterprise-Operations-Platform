import { SupportQueuesSessionService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesSessionService";
import { SupportQueuesSessionValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesSession";
import { SupportQueuesSessionStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesSessionStateMachine";

describe("SupportQueuesSession Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesSessionService();
  const sm = new SupportQueuesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesSession Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
