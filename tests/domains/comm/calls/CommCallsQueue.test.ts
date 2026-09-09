import { CommCallsQueueService } from "../../../services/core-engine/src/comm/calls/services/CommCallsQueueService";
import { CommCallsQueueValidator } from "../../../packages/types/src/domains/comm/calls/CommCallsQueue";
import { CommCallsQueueStateMachine } from "../../../services/core-engine/src/comm/calls/state-machines/CommCallsQueueStateMachine";

describe("CommCallsQueue Comprehensive Domain Test Suite", () => {
  const service = new CommCallsQueueService();
  const sm = new CommCallsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommCallsQueue Instance",
      domain: "comm_calls",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommCallsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
