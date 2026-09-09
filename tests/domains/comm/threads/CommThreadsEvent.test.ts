import { CommThreadsEventService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsEventService";
import { CommThreadsEventValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsEvent";
import { CommThreadsEventStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsEventStateMachine";

describe("CommThreadsEvent Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsEventService();
  const sm = new CommThreadsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsEvent Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
