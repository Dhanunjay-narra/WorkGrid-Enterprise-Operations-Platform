import { SupportQueuesRecordService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesRecordService";
import { SupportQueuesRecordValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesRecord";
import { SupportQueuesRecordStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesRecordStateMachine";

describe("SupportQueuesRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesRecordService();
  const sm = new SupportQueuesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesRecord Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
