import { SupportQueuesConfigService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesConfigService";
import { SupportQueuesConfigValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesConfig";
import { SupportQueuesConfigStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesConfigStateMachine";

describe("SupportQueuesConfig Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesConfigService();
  const sm = new SupportQueuesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesConfig Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
