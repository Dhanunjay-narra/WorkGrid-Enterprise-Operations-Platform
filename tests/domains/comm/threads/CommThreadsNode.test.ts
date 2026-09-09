import { CommThreadsNodeService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsNodeService";
import { CommThreadsNodeValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsNode";
import { CommThreadsNodeStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsNodeStateMachine";

describe("CommThreadsNode Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsNodeService();
  const sm = new CommThreadsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsNode Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
