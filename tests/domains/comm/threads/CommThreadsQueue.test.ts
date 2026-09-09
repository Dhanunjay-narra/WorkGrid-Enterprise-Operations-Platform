import { CommThreadsQueueService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsQueueService";
import { CommThreadsQueueValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsQueue";
import { CommThreadsQueueStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsQueueStateMachine";

describe("CommThreadsQueue Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsQueueService();
  const sm = new CommThreadsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsQueue Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
