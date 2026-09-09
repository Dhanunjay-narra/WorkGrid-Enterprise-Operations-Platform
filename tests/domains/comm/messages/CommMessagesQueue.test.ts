import { CommMessagesQueueService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesQueueService";
import { CommMessagesQueueValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesQueue";
import { CommMessagesQueueStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesQueueStateMachine";

describe("CommMessagesQueue Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesQueueService();
  const sm = new CommMessagesQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesQueue Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
